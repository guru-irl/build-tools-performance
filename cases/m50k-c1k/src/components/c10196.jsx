import React from 'react';
const LABEL_10196 = 'component_10196';
export function Component10196({ value = 10196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10196, 'data-value': derived.doubled }, children);
}
export default Component10196;
