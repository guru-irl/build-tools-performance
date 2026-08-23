import React from 'react';
const LABEL_31611 = 'component_31611';
export function Component31611({ value = 31611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31611, 'data-value': derived.doubled }, children);
}
export default Component31611;
