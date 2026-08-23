import React from 'react';
const LABEL_340 = 'component_340';
export function Component340({ value = 340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_340, 'data-value': derived.doubled }, children);
}
export default Component340;
