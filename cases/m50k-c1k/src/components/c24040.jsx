import React from 'react';
const LABEL_24040 = 'component_24040';
export function Component24040({ value = 24040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24040, 'data-value': derived.doubled }, children);
}
export default Component24040;
