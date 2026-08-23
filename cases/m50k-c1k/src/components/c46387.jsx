import React from 'react';
const LABEL_46387 = 'component_46387';
export function Component46387({ value = 46387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46387, 'data-value': derived.doubled }, children);
}
export default Component46387;
