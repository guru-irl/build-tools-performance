import React from 'react';
const LABEL_19166 = 'component_19166';
export function Component19166({ value = 19166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19166, 'data-value': derived.doubled }, children);
}
export default Component19166;
