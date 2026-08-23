import React from 'react';
const LABEL_29921 = 'component_29921';
export function Component29921({ value = 29921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29921, 'data-value': derived.doubled }, children);
}
export default Component29921;
