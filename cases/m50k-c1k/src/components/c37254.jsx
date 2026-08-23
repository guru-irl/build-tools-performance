import React from 'react';
const LABEL_37254 = 'component_37254';
export function Component37254({ value = 37254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37254, 'data-value': derived.doubled }, children);
}
export default Component37254;
