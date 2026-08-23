import React from 'react';
const LABEL_24039 = 'component_24039';
export function Component24039({ value = 24039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24039, 'data-value': derived.doubled }, children);
}
export default Component24039;
