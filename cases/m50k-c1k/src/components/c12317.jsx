import React from 'react';
const LABEL_12317 = 'component_12317';
export function Component12317({ value = 12317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12317, 'data-value': derived.doubled }, children);
}
export default Component12317;
