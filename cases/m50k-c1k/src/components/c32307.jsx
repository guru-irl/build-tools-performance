import React from 'react';
const LABEL_32307 = 'component_32307';
export function Component32307({ value = 32307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32307, 'data-value': derived.doubled }, children);
}
export default Component32307;
