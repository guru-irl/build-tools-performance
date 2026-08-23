import React from 'react';
const LABEL_36505 = 'component_36505';
export function Component36505({ value = 36505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36505, 'data-value': derived.doubled }, children);
}
export default Component36505;
