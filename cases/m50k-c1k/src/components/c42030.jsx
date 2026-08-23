import React from 'react';
const LABEL_42030 = 'component_42030';
export function Component42030({ value = 42030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42030, 'data-value': derived.doubled }, children);
}
export default Component42030;
