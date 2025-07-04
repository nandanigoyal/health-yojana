
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles } from 'lucide-react';

interface EligibilityFormProps {
  onSubmit: (formData: any) => void;
}

const EligibilityForm: React.FC<EligibilityFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    income: '',
    familySize: '',
    pregnant: false,
    lactating: false,
    hasHealthInsurance: false,
    state: '',
    district: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle>Find Your Perfect Schemes</CardTitle>
            <p className="text-muted-foreground">Tell us about yourself to get personalized recommendations</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="Enter your age"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="income">Monthly Family Income</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, income: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select income range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below-50k">Below ₹50,000</SelectItem>
                  <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="above-2l">Above ₹2,00,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="familySize">Family Size</Label>
              <Input
                id="familySize"
                type="number"
                value={formData.familySize}
                onChange={(e) => setFormData({ ...formData, familySize: e.target.value })}
                placeholder="Number of family members"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, state: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                placeholder="Enter your district"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <Label className="text-base font-medium">Current Status (Check all that apply)</Label>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="pregnant"
                  checked={formData.pregnant}
                  onCheckedChange={(checked) => setFormData({ ...formData, pregnant: checked as boolean })}
                />
                <Label htmlFor="pregnant" className="text-sm">Currently Pregnant</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="lactating"
                  checked={formData.lactating}
                  onCheckedChange={(checked) => setFormData({ ...formData, lactating: checked as boolean })}
                />
                <Label htmlFor="lactating" className="text-sm">Currently Breastfeeding</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="hasHealthInsurance"
                  checked={formData.hasHealthInsurance}
                  onCheckedChange={(checked) => setFormData({ ...formData, hasHealthInsurance: checked as boolean })}
                />
                <Label htmlFor="hasHealthInsurance" className="text-sm">Have Health Insurance</Label>
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full" size="lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Find My Schemes
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EligibilityForm;
