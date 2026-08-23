import React from 'react';
const LABEL_8499 = 'component_8499';
export function Component8499({ value = 8499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8499, 'data-value': derived.doubled }, children);
}
export default Component8499;
