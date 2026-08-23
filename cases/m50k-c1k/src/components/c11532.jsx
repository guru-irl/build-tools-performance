import React from 'react';
const LABEL_11532 = 'component_11532';
export function Component11532({ value = 11532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11532, 'data-value': derived.doubled }, children);
}
export default Component11532;
