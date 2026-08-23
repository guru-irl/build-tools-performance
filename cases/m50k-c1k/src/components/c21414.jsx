import React from 'react';
const LABEL_21414 = 'component_21414';
export function Component21414({ value = 21414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21414, 'data-value': derived.doubled }, children);
}
export default Component21414;
