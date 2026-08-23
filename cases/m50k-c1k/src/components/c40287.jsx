import React from 'react';
const LABEL_40287 = 'component_40287';
export function Component40287({ value = 40287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40287, 'data-value': derived.doubled }, children);
}
export default Component40287;
