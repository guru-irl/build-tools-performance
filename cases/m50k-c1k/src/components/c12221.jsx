import React from 'react';
const LABEL_12221 = 'component_12221';
export function Component12221({ value = 12221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12221, 'data-value': derived.doubled }, children);
}
export default Component12221;
