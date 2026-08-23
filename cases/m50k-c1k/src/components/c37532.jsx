import React from 'react';
const LABEL_37532 = 'component_37532';
export function Component37532({ value = 37532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37532, 'data-value': derived.doubled }, children);
}
export default Component37532;
