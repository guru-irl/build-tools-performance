import React from 'react';
const LABEL_29258 = 'component_29258';
export function Component29258({ value = 29258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29258, 'data-value': derived.doubled }, children);
}
export default Component29258;
