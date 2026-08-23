import React from 'react';
const LABEL_39288 = 'component_39288';
export function Component39288({ value = 39288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39288, 'data-value': derived.doubled }, children);
}
export default Component39288;
