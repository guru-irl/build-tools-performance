import React from 'react';
const LABEL_25051 = 'component_25051';
export function Component25051({ value = 25051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25051, 'data-value': derived.doubled }, children);
}
export default Component25051;
