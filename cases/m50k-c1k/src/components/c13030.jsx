import React from 'react';
const LABEL_13030 = 'component_13030';
export function Component13030({ value = 13030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13030, 'data-value': derived.doubled }, children);
}
export default Component13030;
