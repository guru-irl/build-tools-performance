import React from 'react';
const LABEL_39998 = 'component_39998';
export function Component39998({ value = 39998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39998, 'data-value': derived.doubled }, children);
}
export default Component39998;
