import React from 'react';
const LABEL_28825 = 'component_28825';
export function Component28825({ value = 28825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28825, 'data-value': derived.doubled }, children);
}
export default Component28825;
