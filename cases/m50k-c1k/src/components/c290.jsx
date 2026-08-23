import React from 'react';
const LABEL_290 = 'component_290';
export function Component290({ value = 290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_290, 'data-value': derived.doubled }, children);
}
export default Component290;
