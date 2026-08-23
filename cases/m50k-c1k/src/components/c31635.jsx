import React from 'react';
const LABEL_31635 = 'component_31635';
export function Component31635({ value = 31635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31635, 'data-value': derived.doubled }, children);
}
export default Component31635;
