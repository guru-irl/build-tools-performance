import React from 'react';
const LABEL_24260 = 'component_24260';
export function Component24260({ value = 24260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24260, 'data-value': derived.doubled }, children);
}
export default Component24260;
