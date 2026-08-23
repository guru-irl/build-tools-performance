import React from 'react';
const LABEL_37987 = 'component_37987';
export function Component37987({ value = 37987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37987, 'data-value': derived.doubled }, children);
}
export default Component37987;
