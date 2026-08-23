import React from 'react';
const LABEL_10884 = 'component_10884';
export function Component10884({ value = 10884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10884, 'data-value': derived.doubled }, children);
}
export default Component10884;
