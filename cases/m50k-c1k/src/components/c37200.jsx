import React from 'react';
const LABEL_37200 = 'component_37200';
export function Component37200({ value = 37200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37200, 'data-value': derived.doubled }, children);
}
export default Component37200;
