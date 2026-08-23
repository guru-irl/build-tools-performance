import React from 'react';
const LABEL_24314 = 'component_24314';
export function Component24314({ value = 24314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24314, 'data-value': derived.doubled }, children);
}
export default Component24314;
