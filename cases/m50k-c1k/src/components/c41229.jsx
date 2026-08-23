import React from 'react';
const LABEL_41229 = 'component_41229';
export function Component41229({ value = 41229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41229, 'data-value': derived.doubled }, children);
}
export default Component41229;
