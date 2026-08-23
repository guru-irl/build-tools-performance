import React from 'react';
const LABEL_11099 = 'component_11099';
export function Component11099({ value = 11099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11099, 'data-value': derived.doubled }, children);
}
export default Component11099;
