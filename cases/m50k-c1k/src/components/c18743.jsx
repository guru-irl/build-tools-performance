import React from 'react';
const LABEL_18743 = 'component_18743';
export function Component18743({ value = 18743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18743, 'data-value': derived.doubled }, children);
}
export default Component18743;
