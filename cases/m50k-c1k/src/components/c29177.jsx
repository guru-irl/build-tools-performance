import React from 'react';
const LABEL_29177 = 'component_29177';
export function Component29177({ value = 29177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29177, 'data-value': derived.doubled }, children);
}
export default Component29177;
