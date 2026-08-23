import React from 'react';
const LABEL_37090 = 'component_37090';
export function Component37090({ value = 37090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37090, 'data-value': derived.doubled }, children);
}
export default Component37090;
