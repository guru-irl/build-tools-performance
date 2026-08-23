import React from 'react';
const LABEL_24075 = 'component_24075';
export function Component24075({ value = 24075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24075, 'data-value': derived.doubled }, children);
}
export default Component24075;
