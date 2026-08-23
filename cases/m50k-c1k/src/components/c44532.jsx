import React from 'react';
const LABEL_44532 = 'component_44532';
export function Component44532({ value = 44532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44532, 'data-value': derived.doubled }, children);
}
export default Component44532;
