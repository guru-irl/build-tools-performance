import React from 'react';
const LABEL_16288 = 'component_16288';
export function Component16288({ value = 16288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16288, 'data-value': derived.doubled }, children);
}
export default Component16288;
