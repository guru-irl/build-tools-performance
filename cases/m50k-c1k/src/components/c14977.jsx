import React from 'react';
const LABEL_14977 = 'component_14977';
export function Component14977({ value = 14977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14977, 'data-value': derived.doubled }, children);
}
export default Component14977;
