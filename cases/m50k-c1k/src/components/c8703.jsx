import React from 'react';
const LABEL_8703 = 'component_8703';
export function Component8703({ value = 8703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8703, 'data-value': derived.doubled }, children);
}
export default Component8703;
