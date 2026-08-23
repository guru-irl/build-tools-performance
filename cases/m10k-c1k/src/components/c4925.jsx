import React from 'react';
const LABEL_4925 = 'component_4925';
export function Component4925({ value = 4925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4925, 'data-value': derived.doubled }, children);
}
export default Component4925;
