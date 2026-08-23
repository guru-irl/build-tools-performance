import React from 'react';
const LABEL_15080 = 'component_15080';
export function Component15080({ value = 15080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15080, 'data-value': derived.doubled }, children);
}
export default Component15080;
