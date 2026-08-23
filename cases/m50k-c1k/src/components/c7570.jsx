import React from 'react';
const LABEL_7570 = 'component_7570';
export function Component7570({ value = 7570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7570, 'data-value': derived.doubled }, children);
}
export default Component7570;
