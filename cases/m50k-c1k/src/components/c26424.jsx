import React from 'react';
const LABEL_26424 = 'component_26424';
export function Component26424({ value = 26424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26424, 'data-value': derived.doubled }, children);
}
export default Component26424;
