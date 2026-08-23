import React from 'react';
const LABEL_40985 = 'component_40985';
export function Component40985({ value = 40985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40985, 'data-value': derived.doubled }, children);
}
export default Component40985;
