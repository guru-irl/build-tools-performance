import React from 'react';
const LABEL_10115 = 'component_10115';
export function Component10115({ value = 10115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10115, 'data-value': derived.doubled }, children);
}
export default Component10115;
