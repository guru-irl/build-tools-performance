import React from 'react';
const LABEL_46337 = 'component_46337';
export function Component46337({ value = 46337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46337, 'data-value': derived.doubled }, children);
}
export default Component46337;
