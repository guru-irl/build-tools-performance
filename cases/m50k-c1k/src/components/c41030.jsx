import React from 'react';
const LABEL_41030 = 'component_41030';
export function Component41030({ value = 41030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41030, 'data-value': derived.doubled }, children);
}
export default Component41030;
