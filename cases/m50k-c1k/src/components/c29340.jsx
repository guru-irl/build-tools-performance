import React from 'react';
const LABEL_29340 = 'component_29340';
export function Component29340({ value = 29340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29340, 'data-value': derived.doubled }, children);
}
export default Component29340;
