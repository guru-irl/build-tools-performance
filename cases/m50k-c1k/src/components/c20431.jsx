import React from 'react';
const LABEL_20431 = 'component_20431';
export function Component20431({ value = 20431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20431, 'data-value': derived.doubled }, children);
}
export default Component20431;
