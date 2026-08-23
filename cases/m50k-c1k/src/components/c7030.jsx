import React from 'react';
const LABEL_7030 = 'component_7030';
export function Component7030({ value = 7030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7030, 'data-value': derived.doubled }, children);
}
export default Component7030;
