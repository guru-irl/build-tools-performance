import React from 'react';
const LABEL_24635 = 'component_24635';
export function Component24635({ value = 24635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24635, 'data-value': derived.doubled }, children);
}
export default Component24635;
