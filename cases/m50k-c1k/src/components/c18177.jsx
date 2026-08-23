import React from 'react';
const LABEL_18177 = 'component_18177';
export function Component18177({ value = 18177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18177, 'data-value': derived.doubled }, children);
}
export default Component18177;
