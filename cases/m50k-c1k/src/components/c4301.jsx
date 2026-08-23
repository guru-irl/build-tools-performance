import React from 'react';
const LABEL_4301 = 'component_4301';
export function Component4301({ value = 4301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4301, 'data-value': derived.doubled }, children);
}
export default Component4301;
