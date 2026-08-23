import React from 'react';
const LABEL_31291 = 'component_31291';
export function Component31291({ value = 31291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31291, 'data-value': derived.doubled }, children);
}
export default Component31291;
