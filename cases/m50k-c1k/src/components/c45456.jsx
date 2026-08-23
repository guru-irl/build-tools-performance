import React from 'react';
const LABEL_45456 = 'component_45456';
export function Component45456({ value = 45456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45456, 'data-value': derived.doubled }, children);
}
export default Component45456;
