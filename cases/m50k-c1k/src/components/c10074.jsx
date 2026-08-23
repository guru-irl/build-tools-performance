import React from 'react';
const LABEL_10074 = 'component_10074';
export function Component10074({ value = 10074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10074, 'data-value': derived.doubled }, children);
}
export default Component10074;
