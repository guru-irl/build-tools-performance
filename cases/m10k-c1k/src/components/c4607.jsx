import React from 'react';
const LABEL_4607 = 'component_4607';
export function Component4607({ value = 4607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4607, 'data-value': derived.doubled }, children);
}
export default Component4607;
