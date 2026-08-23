import React from 'react';
const LABEL_41860 = 'component_41860';
export function Component41860({ value = 41860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41860, 'data-value': derived.doubled }, children);
}
export default Component41860;
