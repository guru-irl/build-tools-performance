import React from 'react';
const LABEL_41534 = 'component_41534';
export function Component41534({ value = 41534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41534, 'data-value': derived.doubled }, children);
}
export default Component41534;
