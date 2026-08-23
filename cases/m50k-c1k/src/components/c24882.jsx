import React from 'react';
const LABEL_24882 = 'component_24882';
export function Component24882({ value = 24882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24882, 'data-value': derived.doubled }, children);
}
export default Component24882;
