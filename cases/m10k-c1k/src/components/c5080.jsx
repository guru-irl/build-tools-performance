import React from 'react';
const LABEL_5080 = 'component_5080';
export function Component5080({ value = 5080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5080, 'data-value': derived.doubled }, children);
}
export default Component5080;
