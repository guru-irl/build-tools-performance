import React from 'react';
const LABEL_41667 = 'component_41667';
export function Component41667({ value = 41667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41667, 'data-value': derived.doubled }, children);
}
export default Component41667;
