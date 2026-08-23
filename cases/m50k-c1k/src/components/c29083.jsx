import React from 'react';
const LABEL_29083 = 'component_29083';
export function Component29083({ value = 29083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29083, 'data-value': derived.doubled }, children);
}
export default Component29083;
