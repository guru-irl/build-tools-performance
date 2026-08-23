import React from 'react';
const LABEL_42051 = 'component_42051';
export function Component42051({ value = 42051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42051, 'data-value': derived.doubled }, children);
}
export default Component42051;
