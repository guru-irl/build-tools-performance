import React from 'react';
const LABEL_14166 = 'component_14166';
export function Component14166({ value = 14166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14166, 'data-value': derived.doubled }, children);
}
export default Component14166;
