import React from 'react';
const LABEL_34921 = 'component_34921';
export function Component34921({ value = 34921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34921, 'data-value': derived.doubled }, children);
}
export default Component34921;
