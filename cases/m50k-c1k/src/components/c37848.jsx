import React from 'react';
const LABEL_37848 = 'component_37848';
export function Component37848({ value = 37848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37848, 'data-value': derived.doubled }, children);
}
export default Component37848;
