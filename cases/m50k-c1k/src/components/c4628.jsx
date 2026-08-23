import React from 'react';
const LABEL_4628 = 'component_4628';
export function Component4628({ value = 4628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4628, 'data-value': derived.doubled }, children);
}
export default Component4628;
