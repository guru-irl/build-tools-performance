import React from 'react';
const LABEL_31217 = 'component_31217';
export function Component31217({ value = 31217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31217, 'data-value': derived.doubled }, children);
}
export default Component31217;
