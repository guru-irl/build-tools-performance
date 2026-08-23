import React from 'react';
const LABEL_35083 = 'component_35083';
export function Component35083({ value = 35083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35083, 'data-value': derived.doubled }, children);
}
export default Component35083;
