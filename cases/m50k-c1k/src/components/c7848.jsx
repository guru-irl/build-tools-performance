import React from 'react';
const LABEL_7848 = 'component_7848';
export function Component7848({ value = 7848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7848, 'data-value': derived.doubled }, children);
}
export default Component7848;
