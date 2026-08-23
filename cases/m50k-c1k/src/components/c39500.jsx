import React from 'react';
const LABEL_39500 = 'component_39500';
export function Component39500({ value = 39500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39500, 'data-value': derived.doubled }, children);
}
export default Component39500;
