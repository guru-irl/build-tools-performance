import React from 'react';
const LABEL_41137 = 'component_41137';
export function Component41137({ value = 41137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41137, 'data-value': derived.doubled }, children);
}
export default Component41137;
