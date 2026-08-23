import React from 'react';
const LABEL_18166 = 'component_18166';
export function Component18166({ value = 18166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18166, 'data-value': derived.doubled }, children);
}
export default Component18166;
