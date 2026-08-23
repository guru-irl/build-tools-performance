import React from 'react';
const LABEL_4285 = 'component_4285';
export function Component4285({ value = 4285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4285, 'data-value': derived.doubled }, children);
}
export default Component4285;
