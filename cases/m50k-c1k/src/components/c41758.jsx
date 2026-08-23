import React from 'react';
const LABEL_41758 = 'component_41758';
export function Component41758({ value = 41758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41758, 'data-value': derived.doubled }, children);
}
export default Component41758;
