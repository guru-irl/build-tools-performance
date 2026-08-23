import React from 'react';
const LABEL_13122 = 'component_13122';
export function Component13122({ value = 13122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13122, 'data-value': derived.doubled }, children);
}
export default Component13122;
