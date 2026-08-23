import React from 'react';
const LABEL_19288 = 'component_19288';
export function Component19288({ value = 19288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19288, 'data-value': derived.doubled }, children);
}
export default Component19288;
