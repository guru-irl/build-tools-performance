import React from 'react';
const LABEL_37530 = 'component_37530';
export function Component37530({ value = 37530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37530, 'data-value': derived.doubled }, children);
}
export default Component37530;
