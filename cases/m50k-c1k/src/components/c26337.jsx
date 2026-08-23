import React from 'react';
const LABEL_26337 = 'component_26337';
export function Component26337({ value = 26337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26337, 'data-value': derived.doubled }, children);
}
export default Component26337;
