import React from 'react';
const LABEL_20738 = 'component_20738';
export function Component20738({ value = 20738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20738, 'data-value': derived.doubled }, children);
}
export default Component20738;
