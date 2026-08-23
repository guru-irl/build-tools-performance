import React from 'react';
const LABEL_16169 = 'component_16169';
export function Component16169({ value = 16169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16169, 'data-value': derived.doubled }, children);
}
export default Component16169;
