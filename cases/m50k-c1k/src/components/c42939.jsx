import React from 'react';
const LABEL_42939 = 'component_42939';
export function Component42939({ value = 42939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42939, 'data-value': derived.doubled }, children);
}
export default Component42939;
