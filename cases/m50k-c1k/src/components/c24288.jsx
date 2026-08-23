import React from 'react';
const LABEL_24288 = 'component_24288';
export function Component24288({ value = 24288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24288, 'data-value': derived.doubled }, children);
}
export default Component24288;
