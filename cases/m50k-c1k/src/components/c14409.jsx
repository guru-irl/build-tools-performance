import React from 'react';
const LABEL_14409 = 'component_14409';
export function Component14409({ value = 14409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14409, 'data-value': derived.doubled }, children);
}
export default Component14409;
