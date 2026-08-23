import React from 'react';
const LABEL_19051 = 'component_19051';
export function Component19051({ value = 19051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19051, 'data-value': derived.doubled }, children);
}
export default Component19051;
