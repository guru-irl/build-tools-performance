import React from 'react';
const LABEL_41192 = 'component_41192';
export function Component41192({ value = 41192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41192, 'data-value': derived.doubled }, children);
}
export default Component41192;
