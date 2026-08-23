import React from 'react';
const LABEL_24071 = 'component_24071';
export function Component24071({ value = 24071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24071, 'data-value': derived.doubled }, children);
}
export default Component24071;
