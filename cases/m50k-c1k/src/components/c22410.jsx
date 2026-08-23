import React from 'react';
const LABEL_22410 = 'component_22410';
export function Component22410({ value = 22410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22410, 'data-value': derived.doubled }, children);
}
export default Component22410;
