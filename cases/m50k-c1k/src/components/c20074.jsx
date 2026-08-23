import React from 'react';
const LABEL_20074 = 'component_20074';
export function Component20074({ value = 20074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20074, 'data-value': derived.doubled }, children);
}
export default Component20074;
