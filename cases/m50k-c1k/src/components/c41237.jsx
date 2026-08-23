import React from 'react';
const LABEL_41237 = 'component_41237';
export function Component41237({ value = 41237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41237, 'data-value': derived.doubled }, children);
}
export default Component41237;
