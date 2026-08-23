import React from 'react';
const LABEL_10166 = 'component_10166';
export function Component10166({ value = 10166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10166, 'data-value': derived.doubled }, children);
}
export default Component10166;
