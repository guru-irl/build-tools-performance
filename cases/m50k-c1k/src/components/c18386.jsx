import React from 'react';
const LABEL_18386 = 'component_18386';
export function Component18386({ value = 18386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18386, 'data-value': derived.doubled }, children);
}
export default Component18386;
