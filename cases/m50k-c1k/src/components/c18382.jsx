import React from 'react';
const LABEL_18382 = 'component_18382';
export function Component18382({ value = 18382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18382, 'data-value': derived.doubled }, children);
}
export default Component18382;
