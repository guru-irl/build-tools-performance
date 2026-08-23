import React from 'react';
const LABEL_7410 = 'component_7410';
export function Component7410({ value = 7410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7410, 'data-value': derived.doubled }, children);
}
export default Component7410;
