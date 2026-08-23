import React from 'react';
const LABEL_36173 = 'component_36173';
export function Component36173({ value = 36173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36173, 'data-value': derived.doubled }, children);
}
export default Component36173;
