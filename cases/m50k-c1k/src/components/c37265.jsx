import React from 'react';
const LABEL_37265 = 'component_37265';
export function Component37265({ value = 37265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37265, 'data-value': derived.doubled }, children);
}
export default Component37265;
