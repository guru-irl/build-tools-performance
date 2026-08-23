import React from 'react';
const LABEL_32583 = 'component_32583';
export function Component32583({ value = 32583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32583, 'data-value': derived.doubled }, children);
}
export default Component32583;
