import React from 'react';
const LABEL_7930 = 'component_7930';
export function Component7930({ value = 7930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7930, 'data-value': derived.doubled }, children);
}
export default Component7930;
