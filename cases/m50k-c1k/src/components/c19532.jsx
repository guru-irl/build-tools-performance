import React from 'react';
const LABEL_19532 = 'component_19532';
export function Component19532({ value = 19532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19532, 'data-value': derived.doubled }, children);
}
export default Component19532;
