import React from 'react';
const LABEL_7019 = 'component_7019';
export function Component7019({ value = 7019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7019, 'data-value': derived.doubled }, children);
}
export default Component7019;
