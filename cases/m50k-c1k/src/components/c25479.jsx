import React from 'react';
const LABEL_25479 = 'component_25479';
export function Component25479({ value = 25479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25479, 'data-value': derived.doubled }, children);
}
export default Component25479;
