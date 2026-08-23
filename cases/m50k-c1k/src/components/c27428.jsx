import React from 'react';
const LABEL_27428 = 'component_27428';
export function Component27428({ value = 27428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27428, 'data-value': derived.doubled }, children);
}
export default Component27428;
