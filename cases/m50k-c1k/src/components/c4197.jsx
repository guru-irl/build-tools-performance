import React from 'react';
const LABEL_4197 = 'component_4197';
export function Component4197({ value = 4197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4197, 'data-value': derived.doubled }, children);
}
export default Component4197;
