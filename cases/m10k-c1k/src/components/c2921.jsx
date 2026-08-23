import React from 'react';
const LABEL_2921 = 'component_2921';
export function Component2921({ value = 2921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2921, 'data-value': derived.doubled }, children);
}
export default Component2921;
