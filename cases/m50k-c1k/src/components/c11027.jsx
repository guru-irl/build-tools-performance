import React from 'react';
const LABEL_11027 = 'component_11027';
export function Component11027({ value = 11027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11027, 'data-value': derived.doubled }, children);
}
export default Component11027;
