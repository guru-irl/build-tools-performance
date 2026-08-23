import React from 'react';
const LABEL_1446 = 'component_1446';
export function Component1446({ value = 1446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1446, 'data-value': derived.doubled }, children);
}
export default Component1446;
