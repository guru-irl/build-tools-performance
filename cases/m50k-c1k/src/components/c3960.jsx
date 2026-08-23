import React from 'react';
const LABEL_3960 = 'component_3960';
export function Component3960({ value = 3960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3960, 'data-value': derived.doubled }, children);
}
export default Component3960;
