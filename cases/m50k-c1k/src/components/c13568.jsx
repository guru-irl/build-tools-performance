import React from 'react';
const LABEL_13568 = 'component_13568';
export function Component13568({ value = 13568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13568, 'data-value': derived.doubled }, children);
}
export default Component13568;
