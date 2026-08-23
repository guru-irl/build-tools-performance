import React from 'react';
const LABEL_29308 = 'component_29308';
export function Component29308({ value = 29308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29308, 'data-value': derived.doubled }, children);
}
export default Component29308;
