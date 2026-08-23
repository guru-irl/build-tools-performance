import React from 'react';
const LABEL_34479 = 'component_34479';
export function Component34479({ value = 34479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34479, 'data-value': derived.doubled }, children);
}
export default Component34479;
