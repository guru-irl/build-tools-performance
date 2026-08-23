import React from 'react';
const LABEL_16920 = 'component_16920';
export function Component16920({ value = 16920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16920, 'data-value': derived.doubled }, children);
}
export default Component16920;
