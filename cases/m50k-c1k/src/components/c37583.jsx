import React from 'react';
const LABEL_37583 = 'component_37583';
export function Component37583({ value = 37583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37583, 'data-value': derived.doubled }, children);
}
export default Component37583;
