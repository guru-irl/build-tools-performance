import React from 'react';
const LABEL_1960 = 'component_1960';
export function Component1960({ value = 1960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1960, 'data-value': derived.doubled }, children);
}
export default Component1960;
