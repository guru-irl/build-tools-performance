import React from 'react';
const LABEL_11661 = 'component_11661';
export function Component11661({ value = 11661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11661, 'data-value': derived.doubled }, children);
}
export default Component11661;
