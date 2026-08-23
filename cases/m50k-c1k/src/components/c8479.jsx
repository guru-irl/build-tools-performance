import React from 'react';
const LABEL_8479 = 'component_8479';
export function Component8479({ value = 8479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8479, 'data-value': derived.doubled }, children);
}
export default Component8479;
