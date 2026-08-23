import React from 'react';
const LABEL_7473 = 'component_7473';
export function Component7473({ value = 7473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7473, 'data-value': derived.doubled }, children);
}
export default Component7473;
