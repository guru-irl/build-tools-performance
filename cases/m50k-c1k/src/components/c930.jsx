import React from 'react';
const LABEL_930 = 'component_930';
export function Component930({ value = 930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_930, 'data-value': derived.doubled }, children);
}
export default Component930;
