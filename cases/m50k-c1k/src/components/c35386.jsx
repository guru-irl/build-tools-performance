import React from 'react';
const LABEL_35386 = 'component_35386';
export function Component35386({ value = 35386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35386, 'data-value': derived.doubled }, children);
}
export default Component35386;
