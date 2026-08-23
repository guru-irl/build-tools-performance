import React from 'react';
const LABEL_41140 = 'component_41140';
export function Component41140({ value = 41140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41140, 'data-value': derived.doubled }, children);
}
export default Component41140;
