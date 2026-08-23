import React from 'react';
const LABEL_16184 = 'component_16184';
export function Component16184({ value = 16184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16184, 'data-value': derived.doubled }, children);
}
export default Component16184;
