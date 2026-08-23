import React from 'react';
const LABEL_20355 = 'component_20355';
export function Component20355({ value = 20355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20355, 'data-value': derived.doubled }, children);
}
export default Component20355;
