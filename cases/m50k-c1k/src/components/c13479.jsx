import React from 'react';
const LABEL_13479 = 'component_13479';
export function Component13479({ value = 13479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13479, 'data-value': derived.doubled }, children);
}
export default Component13479;
