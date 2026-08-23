import React from 'react';
const LABEL_10880 = 'component_10880';
export function Component10880({ value = 10880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10880, 'data-value': derived.doubled }, children);
}
export default Component10880;
