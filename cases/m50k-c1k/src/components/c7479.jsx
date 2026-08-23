import React from 'react';
const LABEL_7479 = 'component_7479';
export function Component7479({ value = 7479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7479, 'data-value': derived.doubled }, children);
}
export default Component7479;
