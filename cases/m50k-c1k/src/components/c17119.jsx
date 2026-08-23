import React from 'react';
const LABEL_17119 = 'component_17119';
export function Component17119({ value = 17119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17119, 'data-value': derived.doubled }, children);
}
export default Component17119;
