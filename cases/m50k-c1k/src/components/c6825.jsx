import React from 'react';
const LABEL_6825 = 'component_6825';
export function Component6825({ value = 6825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6825, 'data-value': derived.doubled }, children);
}
export default Component6825;
