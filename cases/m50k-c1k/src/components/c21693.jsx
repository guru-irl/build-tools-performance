import React from 'react';
const LABEL_21693 = 'component_21693';
export function Component21693({ value = 21693, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21693, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21693, 'data-value': derived.doubled }, children);
}
export default Component21693;
