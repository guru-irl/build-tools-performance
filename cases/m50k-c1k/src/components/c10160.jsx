import React from 'react';
const LABEL_10160 = 'component_10160';
export function Component10160({ value = 10160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10160, 'data-value': derived.doubled }, children);
}
export default Component10160;
