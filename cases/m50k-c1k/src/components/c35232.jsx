import React from 'react';
const LABEL_35232 = 'component_35232';
export function Component35232({ value = 35232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35232, 'data-value': derived.doubled }, children);
}
export default Component35232;
