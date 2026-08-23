import React from 'react';
const LABEL_6446 = 'component_6446';
export function Component6446({ value = 6446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6446, 'data-value': derived.doubled }, children);
}
export default Component6446;
