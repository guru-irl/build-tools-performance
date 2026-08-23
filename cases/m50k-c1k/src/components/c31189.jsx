import React from 'react';
const LABEL_31189 = 'component_31189';
export function Component31189({ value = 31189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31189, 'data-value': derived.doubled }, children);
}
export default Component31189;
