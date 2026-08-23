import React from 'react';
const LABEL_5977 = 'component_5977';
export function Component5977({ value = 5977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5977, 'data-value': derived.doubled }, children);
}
export default Component5977;
