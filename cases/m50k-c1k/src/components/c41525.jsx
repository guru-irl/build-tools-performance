import React from 'react';
const LABEL_41525 = 'component_41525';
export function Component41525({ value = 41525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41525, 'data-value': derived.doubled }, children);
}
export default Component41525;
