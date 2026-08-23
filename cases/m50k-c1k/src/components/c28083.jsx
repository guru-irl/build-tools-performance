import React from 'react';
const LABEL_28083 = 'component_28083';
export function Component28083({ value = 28083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28083, 'data-value': derived.doubled }, children);
}
export default Component28083;
