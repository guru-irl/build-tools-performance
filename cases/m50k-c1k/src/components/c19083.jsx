import React from 'react';
const LABEL_19083 = 'component_19083';
export function Component19083({ value = 19083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19083, 'data-value': derived.doubled }, children);
}
export default Component19083;
