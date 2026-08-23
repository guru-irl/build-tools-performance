import React from 'react';
const LABEL_20973 = 'component_20973';
export function Component20973({ value = 20973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20973, 'data-value': derived.doubled }, children);
}
export default Component20973;
