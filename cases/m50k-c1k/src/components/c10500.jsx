import React from 'react';
const LABEL_10500 = 'component_10500';
export function Component10500({ value = 10500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10500, 'data-value': derived.doubled }, children);
}
export default Component10500;
