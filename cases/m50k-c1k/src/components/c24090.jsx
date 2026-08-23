import React from 'react';
const LABEL_24090 = 'component_24090';
export function Component24090({ value = 24090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24090, 'data-value': derived.doubled }, children);
}
export default Component24090;
