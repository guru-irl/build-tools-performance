import React from 'react';
const LABEL_19583 = 'component_19583';
export function Component19583({ value = 19583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19583, 'data-value': derived.doubled }, children);
}
export default Component19583;
