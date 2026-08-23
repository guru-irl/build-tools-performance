import React from 'react';
const LABEL_12040 = 'component_12040';
export function Component12040({ value = 12040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12040, 'data-value': derived.doubled }, children);
}
export default Component12040;
