import React from 'react';
const LABEL_10995 = 'component_10995';
export function Component10995({ value = 10995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10995, 'data-value': derived.doubled }, children);
}
export default Component10995;
