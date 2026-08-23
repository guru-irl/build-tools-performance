import React from 'react';
const LABEL_31166 = 'component_31166';
export function Component31166({ value = 31166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31166, 'data-value': derived.doubled }, children);
}
export default Component31166;
