import React from 'react';
const LABEL_41269 = 'component_41269';
export function Component41269({ value = 41269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41269, 'data-value': derived.doubled }, children);
}
export default Component41269;
