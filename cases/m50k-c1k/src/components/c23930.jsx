import React from 'react';
const LABEL_23930 = 'component_23930';
export function Component23930({ value = 23930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23930, 'data-value': derived.doubled }, children);
}
export default Component23930;
