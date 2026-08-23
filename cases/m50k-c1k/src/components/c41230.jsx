import React from 'react';
const LABEL_41230 = 'component_41230';
export function Component41230({ value = 41230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41230, 'data-value': derived.doubled }, children);
}
export default Component41230;
