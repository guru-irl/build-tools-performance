import React from 'react';
const LABEL_31825 = 'component_31825';
export function Component31825({ value = 31825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31825, 'data-value': derived.doubled }, children);
}
export default Component31825;
