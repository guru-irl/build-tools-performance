import React from 'react';
const LABEL_10479 = 'component_10479';
export function Component10479({ value = 10479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10479, 'data-value': derived.doubled }, children);
}
export default Component10479;
