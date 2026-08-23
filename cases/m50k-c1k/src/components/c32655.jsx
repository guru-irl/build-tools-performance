import React from 'react';
const LABEL_32655 = 'component_32655';
export function Component32655({ value = 32655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32655, 'data-value': derived.doubled }, children);
}
export default Component32655;
