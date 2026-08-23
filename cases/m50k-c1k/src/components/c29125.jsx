import React from 'react';
const LABEL_29125 = 'component_29125';
export function Component29125({ value = 29125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29125, 'data-value': derived.doubled }, children);
}
export default Component29125;
