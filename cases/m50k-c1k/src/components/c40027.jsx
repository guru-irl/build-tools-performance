import React from 'react';
const LABEL_40027 = 'component_40027';
export function Component40027({ value = 40027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40027, 'data-value': derived.doubled }, children);
}
export default Component40027;
