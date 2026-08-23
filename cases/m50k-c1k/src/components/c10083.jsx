import React from 'react';
const LABEL_10083 = 'component_10083';
export function Component10083({ value = 10083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10083, 'data-value': derived.doubled }, children);
}
export default Component10083;
