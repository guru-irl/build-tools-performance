import React from 'react';
const LABEL_16303 = 'component_16303';
export function Component16303({ value = 16303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16303, 'data-value': derived.doubled }, children);
}
export default Component16303;
