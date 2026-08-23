import React from 'react';
const LABEL_41012 = 'component_41012';
export function Component41012({ value = 41012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41012, 'data-value': derived.doubled }, children);
}
export default Component41012;
