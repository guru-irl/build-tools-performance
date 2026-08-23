import React from 'react';
const LABEL_14884 = 'component_14884';
export function Component14884({ value = 14884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14884, 'data-value': derived.doubled }, children);
}
export default Component14884;
