import React from 'react';
const LABEL_41735 = 'component_41735';
export function Component41735({ value = 41735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41735, 'data-value': derived.doubled }, children);
}
export default Component41735;
