import React from 'react';
const LABEL_16620 = 'component_16620';
export function Component16620({ value = 16620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16620, 'data-value': derived.doubled }, children);
}
export default Component16620;
