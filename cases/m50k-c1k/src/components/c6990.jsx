import React from 'react';
const LABEL_6990 = 'component_6990';
export function Component6990({ value = 6990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6990, 'data-value': derived.doubled }, children);
}
export default Component6990;
