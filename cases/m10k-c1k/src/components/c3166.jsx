import React from 'react';
const LABEL_3166 = 'component_3166';
export function Component3166({ value = 3166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3166, 'data-value': derived.doubled }, children);
}
export default Component3166;
