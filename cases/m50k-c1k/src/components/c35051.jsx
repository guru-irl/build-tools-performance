import React from 'react';
const LABEL_35051 = 'component_35051';
export function Component35051({ value = 35051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35051, 'data-value': derived.doubled }, children);
}
export default Component35051;
