import React from 'react';
const LABEL_36238 = 'component_36238';
export function Component36238({ value = 36238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36238, 'data-value': derived.doubled }, children);
}
export default Component36238;
