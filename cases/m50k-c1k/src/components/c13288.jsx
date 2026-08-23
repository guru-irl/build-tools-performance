import React from 'react';
const LABEL_13288 = 'component_13288';
export function Component13288({ value = 13288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13288, 'data-value': derived.doubled }, children);
}
export default Component13288;
