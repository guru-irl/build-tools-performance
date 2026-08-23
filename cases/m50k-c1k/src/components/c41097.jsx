import React from 'react';
const LABEL_41097 = 'component_41097';
export function Component41097({ value = 41097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41097, 'data-value': derived.doubled }, children);
}
export default Component41097;
