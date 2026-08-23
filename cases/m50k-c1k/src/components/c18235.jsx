import React from 'react';
const LABEL_18235 = 'component_18235';
export function Component18235({ value = 18235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18235, 'data-value': derived.doubled }, children);
}
export default Component18235;
