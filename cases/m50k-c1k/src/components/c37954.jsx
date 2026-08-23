import React from 'react';
const LABEL_37954 = 'component_37954';
export function Component37954({ value = 37954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37954, 'data-value': derived.doubled }, children);
}
export default Component37954;
