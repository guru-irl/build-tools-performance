import React from 'react';
const LABEL_2775 = 'component_2775';
export function Component2775({ value = 2775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2775, 'data-value': derived.doubled }, children);
}
export default Component2775;
