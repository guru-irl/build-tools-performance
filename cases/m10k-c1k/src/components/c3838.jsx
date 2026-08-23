import React from 'react';
const LABEL_3838 = 'component_3838';
export function Component3838({ value = 3838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3838, 'data-value': derived.doubled }, children);
}
export default Component3838;
