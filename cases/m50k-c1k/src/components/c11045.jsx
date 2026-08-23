import React from 'react';
const LABEL_11045 = 'component_11045';
export function Component11045({ value = 11045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11045, 'data-value': derived.doubled }, children);
}
export default Component11045;
