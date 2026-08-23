import React from 'react';
const LABEL_189 = 'component_189';
export function Component189({ value = 189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_189, 'data-value': derived.doubled }, children);
}
export default Component189;
