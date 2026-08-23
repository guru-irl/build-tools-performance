import React from 'react';
const LABEL_41051 = 'component_41051';
export function Component41051({ value = 41051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41051, 'data-value': derived.doubled }, children);
}
export default Component41051;
