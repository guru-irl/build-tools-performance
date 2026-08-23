import React from 'react';
const LABEL_26080 = 'component_26080';
export function Component26080({ value = 26080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26080, 'data-value': derived.doubled }, children);
}
export default Component26080;
