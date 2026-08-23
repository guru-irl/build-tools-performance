import React from 'react';
const LABEL_14960 = 'component_14960';
export function Component14960({ value = 14960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14960, 'data-value': derived.doubled }, children);
}
export default Component14960;
