import React from 'react';
const LABEL_40479 = 'component_40479';
export function Component40479({ value = 40479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40479, 'data-value': derived.doubled }, children);
}
export default Component40479;
