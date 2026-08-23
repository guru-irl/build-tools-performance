import React from 'react';
const LABEL_41921 = 'component_41921';
export function Component41921({ value = 41921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41921, 'data-value': derived.doubled }, children);
}
export default Component41921;
