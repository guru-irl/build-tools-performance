import React from 'react';
const LABEL_13387 = 'component_13387';
export function Component13387({ value = 13387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13387, 'data-value': derived.doubled }, children);
}
export default Component13387;
