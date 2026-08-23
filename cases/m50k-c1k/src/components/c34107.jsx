import React from 'react';
const LABEL_34107 = 'component_34107';
export function Component34107({ value = 34107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34107, 'data-value': derived.doubled }, children);
}
export default Component34107;
