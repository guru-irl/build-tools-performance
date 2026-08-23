import React from 'react';
const LABEL_39854 = 'component_39854';
export function Component39854({ value = 39854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39854, 'data-value': derived.doubled }, children);
}
export default Component39854;
