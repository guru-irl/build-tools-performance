import React from 'react';
const LABEL_29070 = 'component_29070';
export function Component29070({ value = 29070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29070, 'data-value': derived.doubled }, children);
}
export default Component29070;
