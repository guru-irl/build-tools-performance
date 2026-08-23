import React from 'react';
const LABEL_42607 = 'component_42607';
export function Component42607({ value = 42607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42607, 'data-value': derived.doubled }, children);
}
export default Component42607;
