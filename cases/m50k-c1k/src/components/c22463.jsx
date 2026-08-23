import React from 'react';
const LABEL_22463 = 'component_22463';
export function Component22463({ value = 22463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22463, 'data-value': derived.doubled }, children);
}
export default Component22463;
