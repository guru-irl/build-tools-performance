import React from 'react';
const LABEL_32730 = 'component_32730';
export function Component32730({ value = 32730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32730, 'data-value': derived.doubled }, children);
}
export default Component32730;
