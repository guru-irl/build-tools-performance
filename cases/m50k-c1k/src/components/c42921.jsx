import React from 'react';
const LABEL_42921 = 'component_42921';
export function Component42921({ value = 42921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42921, 'data-value': derived.doubled }, children);
}
export default Component42921;
