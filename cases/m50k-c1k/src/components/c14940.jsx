import React from 'react';
const LABEL_14940 = 'component_14940';
export function Component14940({ value = 14940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14940, 'data-value': derived.doubled }, children);
}
export default Component14940;
