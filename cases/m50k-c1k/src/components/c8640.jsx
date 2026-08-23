import React from 'react';
const LABEL_8640 = 'component_8640';
export function Component8640({ value = 8640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8640, 'data-value': derived.doubled }, children);
}
export default Component8640;
