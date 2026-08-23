import React from 'react';
const LABEL_45633 = 'component_45633';
export function Component45633({ value = 45633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45633, 'data-value': derived.doubled }, children);
}
export default Component45633;
