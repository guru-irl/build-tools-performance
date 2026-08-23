import React from 'react';
const LABEL_42689 = 'component_42689';
export function Component42689({ value = 42689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42689, 'data-value': derived.doubled }, children);
}
export default Component42689;
