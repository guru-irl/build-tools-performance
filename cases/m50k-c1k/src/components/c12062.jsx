import React from 'react';
const LABEL_12062 = 'component_12062';
export function Component12062({ value = 12062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12062, 'data-value': derived.doubled }, children);
}
export default Component12062;
