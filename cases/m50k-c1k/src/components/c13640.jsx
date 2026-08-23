import React from 'react';
const LABEL_13640 = 'component_13640';
export function Component13640({ value = 13640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13640, 'data-value': derived.doubled }, children);
}
export default Component13640;
