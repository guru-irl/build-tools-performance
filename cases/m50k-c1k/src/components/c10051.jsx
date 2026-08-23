import React from 'react';
const LABEL_10051 = 'component_10051';
export function Component10051({ value = 10051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10051, 'data-value': derived.doubled }, children);
}
export default Component10051;
