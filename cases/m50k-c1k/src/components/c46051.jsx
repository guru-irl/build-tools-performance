import React from 'react';
const LABEL_46051 = 'component_46051';
export function Component46051({ value = 46051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46051, 'data-value': derived.doubled }, children);
}
export default Component46051;
