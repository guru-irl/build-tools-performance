import React from 'react';
const LABEL_46146 = 'component_46146';
export function Component46146({ value = 46146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46146, 'data-value': derived.doubled }, children);
}
export default Component46146;
