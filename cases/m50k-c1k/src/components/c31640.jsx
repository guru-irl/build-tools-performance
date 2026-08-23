import React from 'react';
const LABEL_31640 = 'component_31640';
export function Component31640({ value = 31640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31640, 'data-value': derived.doubled }, children);
}
export default Component31640;
