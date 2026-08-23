import React from 'react';
const LABEL_4921 = 'component_4921';
export function Component4921({ value = 4921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4921, 'data-value': derived.doubled }, children);
}
export default Component4921;
