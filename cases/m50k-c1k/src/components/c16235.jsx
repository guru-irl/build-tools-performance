import React from 'react';
const LABEL_16235 = 'component_16235';
export function Component16235({ value = 16235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16235, 'data-value': derived.doubled }, children);
}
export default Component16235;
