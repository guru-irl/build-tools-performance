import React from 'react';
const LABEL_41211 = 'component_41211';
export function Component41211({ value = 41211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41211, 'data-value': derived.doubled }, children);
}
export default Component41211;
