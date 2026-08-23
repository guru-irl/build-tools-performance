import React from 'react';
const LABEL_38902 = 'component_38902';
export function Component38902({ value = 38902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38902, 'data-value': derived.doubled }, children);
}
export default Component38902;
