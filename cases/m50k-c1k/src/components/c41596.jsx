import React from 'react';
const LABEL_41596 = 'component_41596';
export function Component41596({ value = 41596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41596, 'data-value': derived.doubled }, children);
}
export default Component41596;
