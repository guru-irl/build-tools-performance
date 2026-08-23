import React from 'react';
const LABEL_28033 = 'component_28033';
export function Component28033({ value = 28033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28033, 'data-value': derived.doubled }, children);
}
export default Component28033;
