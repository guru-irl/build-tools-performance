import React from 'react';
const LABEL_17769 = 'component_17769';
export function Component17769({ value = 17769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17769, 'data-value': derived.doubled }, children);
}
export default Component17769;
