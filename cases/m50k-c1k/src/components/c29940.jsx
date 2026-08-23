import React from 'react';
const LABEL_29940 = 'component_29940';
export function Component29940({ value = 29940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29940, 'data-value': derived.doubled }, children);
}
export default Component29940;
