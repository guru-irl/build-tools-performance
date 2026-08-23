import React from 'react';
const LABEL_20382 = 'component_20382';
export function Component20382({ value = 20382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20382, 'data-value': derived.doubled }, children);
}
export default Component20382;
