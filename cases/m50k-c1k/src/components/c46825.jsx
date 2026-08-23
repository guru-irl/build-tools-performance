import React from 'react';
const LABEL_46825 = 'component_46825';
export function Component46825({ value = 46825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46825, 'data-value': derived.doubled }, children);
}
export default Component46825;
