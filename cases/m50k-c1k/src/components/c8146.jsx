import React from 'react';
const LABEL_8146 = 'component_8146';
export function Component8146({ value = 8146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8146, 'data-value': derived.doubled }, children);
}
export default Component8146;
