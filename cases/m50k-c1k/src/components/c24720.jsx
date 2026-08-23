import React from 'react';
const LABEL_24720 = 'component_24720';
export function Component24720({ value = 24720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24720, 'data-value': derived.doubled }, children);
}
export default Component24720;
