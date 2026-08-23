import React from 'react';
const LABEL_43921 = 'component_43921';
export function Component43921({ value = 43921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43921, 'data-value': derived.doubled }, children);
}
export default Component43921;
