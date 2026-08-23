import React from 'react';
const LABEL_41427 = 'component_41427';
export function Component41427({ value = 41427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41427, 'data-value': derived.doubled }, children);
}
export default Component41427;
