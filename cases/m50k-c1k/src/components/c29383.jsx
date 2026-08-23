import React from 'react';
const LABEL_29383 = 'component_29383';
export function Component29383({ value = 29383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29383, 'data-value': derived.doubled }, children);
}
export default Component29383;
