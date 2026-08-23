import React from 'react';
const LABEL_6884 = 'component_6884';
export function Component6884({ value = 6884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6884, 'data-value': derived.doubled }, children);
}
export default Component6884;
