import React from 'react';
const LABEL_18189 = 'component_18189';
export function Component18189({ value = 18189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18189, 'data-value': derived.doubled }, children);
}
export default Component18189;
