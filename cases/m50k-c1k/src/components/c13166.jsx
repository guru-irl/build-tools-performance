import React from 'react';
const LABEL_13166 = 'component_13166';
export function Component13166({ value = 13166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13166, 'data-value': derived.doubled }, children);
}
export default Component13166;
