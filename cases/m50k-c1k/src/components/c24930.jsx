import React from 'react';
const LABEL_24930 = 'component_24930';
export function Component24930({ value = 24930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24930, 'data-value': derived.doubled }, children);
}
export default Component24930;
