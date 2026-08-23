import React from 'react';
const LABEL_23693 = 'component_23693';
export function Component23693({ value = 23693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23693, 'data-value': derived.doubled }, children);
}
export default Component23693;
