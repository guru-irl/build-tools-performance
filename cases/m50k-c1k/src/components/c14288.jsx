import React from 'react';
const LABEL_14288 = 'component_14288';
export function Component14288({ value = 14288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14288, 'data-value': derived.doubled }, children);
}
export default Component14288;
