import React from 'react';
const LABEL_22166 = 'component_22166';
export function Component22166({ value = 22166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22166, 'data-value': derived.doubled }, children);
}
export default Component22166;
