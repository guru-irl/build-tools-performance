import React from 'react';
const LABEL_14812 = 'component_14812';
export function Component14812({ value = 14812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14812, 'data-value': derived.doubled }, children);
}
export default Component14812;
