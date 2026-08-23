import React from 'react';
const LABEL_27851 = 'component_27851';
export function Component27851({ value = 27851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27851, 'data-value': derived.doubled }, children);
}
export default Component27851;
