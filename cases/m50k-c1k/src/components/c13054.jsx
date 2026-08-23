import React from 'react';
const LABEL_13054 = 'component_13054';
export function Component13054({ value = 13054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13054, 'data-value': derived.doubled }, children);
}
export default Component13054;
