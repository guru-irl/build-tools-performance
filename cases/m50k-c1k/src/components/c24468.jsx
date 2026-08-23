import React from 'react';
const LABEL_24468 = 'component_24468';
export function Component24468({ value = 24468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24468, 'data-value': derived.doubled }, children);
}
export default Component24468;
