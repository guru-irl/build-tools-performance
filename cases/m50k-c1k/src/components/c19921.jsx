import React from 'react';
const LABEL_19921 = 'component_19921';
export function Component19921({ value = 19921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19921, 'data-value': derived.doubled }, children);
}
export default Component19921;
