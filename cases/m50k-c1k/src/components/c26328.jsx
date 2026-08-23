import React from 'react';
const LABEL_26328 = 'component_26328';
export function Component26328({ value = 26328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26328, 'data-value': derived.doubled }, children);
}
export default Component26328;
