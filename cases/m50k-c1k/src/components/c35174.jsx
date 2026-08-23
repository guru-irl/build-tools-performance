import React from 'react';
const LABEL_35174 = 'component_35174';
export function Component35174({ value = 35174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35174, 'data-value': derived.doubled }, children);
}
export default Component35174;
