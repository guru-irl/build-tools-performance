import React from 'react';
const LABEL_7780 = 'component_7780';
export function Component7780({ value = 7780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7780, 'data-value': derived.doubled }, children);
}
export default Component7780;
