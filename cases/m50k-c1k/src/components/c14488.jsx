import React from 'react';
const LABEL_14488 = 'component_14488';
export function Component14488({ value = 14488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14488, 'data-value': derived.doubled }, children);
}
export default Component14488;
