import React from 'react';
const LABEL_44473 = 'component_44473';
export function Component44473({ value = 44473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44473, 'data-value': derived.doubled }, children);
}
export default Component44473;
