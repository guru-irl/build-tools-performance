import React from 'react';
const LABEL_20901 = 'component_20901';
export function Component20901({ value = 20901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20901, 'data-value': derived.doubled }, children);
}
export default Component20901;
