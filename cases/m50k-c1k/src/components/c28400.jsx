import React from 'react';
const LABEL_28400 = 'component_28400';
export function Component28400({ value = 28400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28400, 'data-value': derived.doubled }, children);
}
export default Component28400;
