import React from 'react';
const LABEL_18410 = 'component_18410';
export function Component18410({ value = 18410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18410, 'data-value': derived.doubled }, children);
}
export default Component18410;
