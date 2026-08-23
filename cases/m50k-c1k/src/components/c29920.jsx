import React from 'react';
const LABEL_29920 = 'component_29920';
export function Component29920({ value = 29920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29920, 'data-value': derived.doubled }, children);
}
export default Component29920;
