import React from 'react';
const LABEL_37761 = 'component_37761';
export function Component37761({ value = 37761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37761, 'data-value': derived.doubled }, children);
}
export default Component37761;
