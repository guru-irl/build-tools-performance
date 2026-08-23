import React from 'react';
const LABEL_10850 = 'component_10850';
export function Component10850({ value = 10850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10850, 'data-value': derived.doubled }, children);
}
export default Component10850;
