import React from 'react';
const LABEL_24442 = 'component_24442';
export function Component24442({ value = 24442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24442, 'data-value': derived.doubled }, children);
}
export default Component24442;
