import React from 'react';
const LABEL_14582 = 'component_14582';
export function Component14582({ value = 14582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14582, 'data-value': derived.doubled }, children);
}
export default Component14582;
