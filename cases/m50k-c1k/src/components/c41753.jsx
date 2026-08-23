import React from 'react';
const LABEL_41753 = 'component_41753';
export function Component41753({ value = 41753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41753, 'data-value': derived.doubled }, children);
}
export default Component41753;
