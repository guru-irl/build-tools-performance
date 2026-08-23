import React from 'react';
const LABEL_32818 = 'component_32818';
export function Component32818({ value = 32818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32818, 'data-value': derived.doubled }, children);
}
export default Component32818;
