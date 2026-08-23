import React from 'react';
const LABEL_214 = 'component_214';
export function Component214({ value = 214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_214, 'data-value': derived.doubled }, children);
}
export default Component214;
