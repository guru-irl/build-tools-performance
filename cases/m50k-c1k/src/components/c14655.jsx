import React from 'react';
const LABEL_14655 = 'component_14655';
export function Component14655({ value = 14655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14655, 'data-value': derived.doubled }, children);
}
export default Component14655;
