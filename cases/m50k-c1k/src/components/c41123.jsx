import React from 'react';
const LABEL_41123 = 'component_41123';
export function Component41123({ value = 41123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41123, 'data-value': derived.doubled }, children);
}
export default Component41123;
