import React from 'react';
const LABEL_26214 = 'component_26214';
export function Component26214({ value = 26214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26214, 'data-value': derived.doubled }, children);
}
export default Component26214;
