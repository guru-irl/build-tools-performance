import React from 'react';
const LABEL_29608 = 'component_29608';
export function Component29608({ value = 29608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29608, 'data-value': derived.doubled }, children);
}
export default Component29608;
