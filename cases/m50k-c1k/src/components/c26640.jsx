import React from 'react';
const LABEL_26640 = 'component_26640';
export function Component26640({ value = 26640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26640, 'data-value': derived.doubled }, children);
}
export default Component26640;
