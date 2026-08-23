import React from 'react';
const LABEL_28987 = 'component_28987';
export function Component28987({ value = 28987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28987, 'data-value': derived.doubled }, children);
}
export default Component28987;
