import React from 'react';
const LABEL_18337 = 'component_18337';
export function Component18337({ value = 18337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18337, 'data-value': derived.doubled }, children);
}
export default Component18337;
