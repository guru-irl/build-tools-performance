import React from 'react';
const LABEL_22640 = 'component_22640';
export function Component22640({ value = 22640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22640, 'data-value': derived.doubled }, children);
}
export default Component22640;
