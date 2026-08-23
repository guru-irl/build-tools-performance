import React from 'react';
const LABEL_7408 = 'component_7408';
export function Component7408({ value = 7408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7408, 'data-value': derived.doubled }, children);
}
export default Component7408;
