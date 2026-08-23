import React from 'react';
const LABEL_24871 = 'component_24871';
export function Component24871({ value = 24871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24871, 'data-value': derived.doubled }, children);
}
export default Component24871;
