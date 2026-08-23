import React from 'react';
const LABEL_41958 = 'component_41958';
export function Component41958({ value = 41958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41958, 'data-value': derived.doubled }, children);
}
export default Component41958;
