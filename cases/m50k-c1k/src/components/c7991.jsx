import React from 'react';
const LABEL_7991 = 'component_7991';
export function Component7991({ value = 7991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7991, 'data-value': derived.doubled }, children);
}
export default Component7991;
