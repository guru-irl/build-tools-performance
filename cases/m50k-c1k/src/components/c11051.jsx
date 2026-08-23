import React from 'react';
const LABEL_11051 = 'component_11051';
export function Component11051({ value = 11051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11051, 'data-value': derived.doubled }, children);
}
export default Component11051;
