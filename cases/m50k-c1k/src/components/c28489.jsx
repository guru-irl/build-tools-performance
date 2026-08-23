import React from 'react';
const LABEL_28489 = 'component_28489';
export function Component28489({ value = 28489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28489, 'data-value': derived.doubled }, children);
}
export default Component28489;
