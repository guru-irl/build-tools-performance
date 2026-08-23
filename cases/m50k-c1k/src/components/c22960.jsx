import React from 'react';
const LABEL_22960 = 'component_22960';
export function Component22960({ value = 22960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22960, 'data-value': derived.doubled }, children);
}
export default Component22960;
