import React from 'react';
const LABEL_18241 = 'component_18241';
export function Component18241({ value = 18241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18241, 'data-value': derived.doubled }, children);
}
export default Component18241;
