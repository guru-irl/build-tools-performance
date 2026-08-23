import React from 'react';
const LABEL_24520 = 'component_24520';
export function Component24520({ value = 24520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24520, 'data-value': derived.doubled }, children);
}
export default Component24520;
