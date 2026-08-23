import React from 'react';
const LABEL_41882 = 'component_41882';
export function Component41882({ value = 41882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41882, 'data-value': derived.doubled }, children);
}
export default Component41882;
