import React from 'react';
const LABEL_174 = 'component_174';
export function Component174({ value = 174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_174, 'data-value': derived.doubled }, children);
}
export default Component174;
