import React from 'react';
const LABEL_12877 = 'component_12877';
export function Component12877({ value = 12877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12877, 'data-value': derived.doubled }, children);
}
export default Component12877;
