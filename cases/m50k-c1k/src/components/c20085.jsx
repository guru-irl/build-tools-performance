import React from 'react';
const LABEL_20085 = 'component_20085';
export function Component20085({ value = 20085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20085, 'data-value': derived.doubled }, children);
}
export default Component20085;
