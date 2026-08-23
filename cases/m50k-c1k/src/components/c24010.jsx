import React from 'react';
const LABEL_24010 = 'component_24010';
export function Component24010({ value = 24010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24010, 'data-value': derived.doubled }, children);
}
export default Component24010;
