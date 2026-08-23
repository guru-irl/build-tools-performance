import React from 'react';
const LABEL_13560 = 'component_13560';
export function Component13560({ value = 13560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13560, 'data-value': derived.doubled }, children);
}
export default Component13560;
