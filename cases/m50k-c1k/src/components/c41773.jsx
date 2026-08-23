import React from 'react';
const LABEL_41773 = 'component_41773';
export function Component41773({ value = 41773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41773, 'data-value': derived.doubled }, children);
}
export default Component41773;
