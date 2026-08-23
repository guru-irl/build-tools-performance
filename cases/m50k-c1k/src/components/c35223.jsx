import React from 'react';
const LABEL_35223 = 'component_35223';
export function Component35223({ value = 35223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35223, 'data-value': derived.doubled }, children);
}
export default Component35223;
