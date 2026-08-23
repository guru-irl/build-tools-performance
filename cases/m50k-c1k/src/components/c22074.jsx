import React from 'react';
const LABEL_22074 = 'component_22074';
export function Component22074({ value = 22074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22074, 'data-value': derived.doubled }, children);
}
export default Component22074;
