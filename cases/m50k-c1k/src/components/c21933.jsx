import React from 'react';
const LABEL_21933 = 'component_21933';
export function Component21933({ value = 21933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21933, 'data-value': derived.doubled }, children);
}
export default Component21933;
