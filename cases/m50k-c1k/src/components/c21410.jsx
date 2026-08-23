import React from 'react';
const LABEL_21410 = 'component_21410';
export function Component21410({ value = 21410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21410, 'data-value': derived.doubled }, children);
}
export default Component21410;
