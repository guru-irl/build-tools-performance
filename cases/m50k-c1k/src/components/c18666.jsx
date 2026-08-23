import React from 'react';
const LABEL_18666 = 'component_18666';
export function Component18666({ value = 18666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18666, 'data-value': derived.doubled }, children);
}
export default Component18666;
