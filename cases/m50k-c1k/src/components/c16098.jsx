import React from 'react';
const LABEL_16098 = 'component_16098';
export function Component16098({ value = 16098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16098, 'data-value': derived.doubled }, children);
}
export default Component16098;
