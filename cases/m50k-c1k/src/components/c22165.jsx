import React from 'react';
const LABEL_22165 = 'component_22165';
export function Component22165({ value = 22165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22165, 'data-value': derived.doubled }, children);
}
export default Component22165;
