import React from 'react';
const LABEL_20229 = 'component_20229';
export function Component20229({ value = 20229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20229, 'data-value': derived.doubled }, children);
}
export default Component20229;
