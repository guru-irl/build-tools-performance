import React from 'react';
const LABEL_37027 = 'component_37027';
export function Component37027({ value = 37027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37027, 'data-value': derived.doubled }, children);
}
export default Component37027;
