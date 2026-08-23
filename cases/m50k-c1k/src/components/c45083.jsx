import React from 'react';
const LABEL_45083 = 'component_45083';
export function Component45083({ value = 45083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45083, 'data-value': derived.doubled }, children);
}
export default Component45083;
