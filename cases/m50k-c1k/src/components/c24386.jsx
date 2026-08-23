import React from 'react';
const LABEL_24386 = 'component_24386';
export function Component24386({ value = 24386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24386, 'data-value': derived.doubled }, children);
}
export default Component24386;
