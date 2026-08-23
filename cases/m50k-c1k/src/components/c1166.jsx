import React from 'react';
const LABEL_1166 = 'component_1166';
export function Component1166({ value = 1166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1166, 'data-value': derived.doubled }, children);
}
export default Component1166;
