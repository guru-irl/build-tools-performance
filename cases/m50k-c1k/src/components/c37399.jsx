import React from 'react';
const LABEL_37399 = 'component_37399';
export function Component37399({ value = 37399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37399, 'data-value': derived.doubled }, children);
}
export default Component37399;
