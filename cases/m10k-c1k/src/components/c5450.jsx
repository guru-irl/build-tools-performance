import React from 'react';
const LABEL_5450 = 'component_5450';
export function Component5450({ value = 5450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5450, 'data-value': derived.doubled }, children);
}
export default Component5450;
