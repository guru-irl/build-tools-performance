import React from 'react';
const LABEL_35790 = 'component_35790';
export function Component35790({ value = 35790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35790, 'data-value': derived.doubled }, children);
}
export default Component35790;
