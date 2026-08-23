import React from 'react';
const LABEL_31086 = 'component_31086';
export function Component31086({ value = 31086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31086, 'data-value': derived.doubled }, children);
}
export default Component31086;
