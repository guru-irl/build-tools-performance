import React from 'react';
const LABEL_10005 = 'component_10005';
export function Component10005({ value = 10005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10005, 'data-value': derived.doubled }, children);
}
export default Component10005;
