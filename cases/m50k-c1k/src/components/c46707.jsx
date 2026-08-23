import React from 'react';
const LABEL_46707 = 'component_46707';
export function Component46707({ value = 46707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46707, 'data-value': derived.doubled }, children);
}
export default Component46707;
