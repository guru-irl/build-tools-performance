import React from 'react';
const LABEL_41280 = 'component_41280';
export function Component41280({ value = 41280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41280, 'data-value': derived.doubled }, children);
}
export default Component41280;
