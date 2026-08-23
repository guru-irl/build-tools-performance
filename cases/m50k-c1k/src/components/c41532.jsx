import React from 'react';
const LABEL_41532 = 'component_41532';
export function Component41532({ value = 41532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41532, 'data-value': derived.doubled }, children);
}
export default Component41532;
