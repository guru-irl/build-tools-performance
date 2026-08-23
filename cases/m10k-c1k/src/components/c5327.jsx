import React from 'react';
const LABEL_5327 = 'component_5327';
export function Component5327({ value = 5327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5327, 'data-value': derived.doubled }, children);
}
export default Component5327;
