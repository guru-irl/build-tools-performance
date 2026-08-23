import React from 'react';
const LABEL_38737 = 'component_38737';
export function Component38737({ value = 38737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38737, 'data-value': derived.doubled }, children);
}
export default Component38737;
