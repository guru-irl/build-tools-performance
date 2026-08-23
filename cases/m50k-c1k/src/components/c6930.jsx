import React from 'react';
const LABEL_6930 = 'component_6930';
export function Component6930({ value = 6930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6930, 'data-value': derived.doubled }, children);
}
export default Component6930;
