import React from 'react';
const LABEL_29479 = 'component_29479';
export function Component29479({ value = 29479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29479, 'data-value': derived.doubled }, children);
}
export default Component29479;
