import React from 'react';
const LABEL_32492 = 'component_32492';
export function Component32492({ value = 32492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32492, 'data-value': derived.doubled }, children);
}
export default Component32492;
