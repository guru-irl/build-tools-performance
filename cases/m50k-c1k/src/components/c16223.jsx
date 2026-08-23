import React from 'react';
const LABEL_16223 = 'component_16223';
export function Component16223({ value = 16223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16223, 'data-value': derived.doubled }, children);
}
export default Component16223;
