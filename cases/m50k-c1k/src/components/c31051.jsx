import React from 'react';
const LABEL_31051 = 'component_31051';
export function Component31051({ value = 31051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31051, 'data-value': derived.doubled }, children);
}
export default Component31051;
