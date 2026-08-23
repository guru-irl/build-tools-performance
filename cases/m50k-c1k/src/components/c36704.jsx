import React from 'react';
const LABEL_36704 = 'component_36704';
export function Component36704({ value = 36704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36704, 'data-value': derived.doubled }, children);
}
export default Component36704;
