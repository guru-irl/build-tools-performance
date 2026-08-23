import React from 'react';
const LABEL_41409 = 'component_41409';
export function Component41409({ value = 41409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41409, 'data-value': derived.doubled }, children);
}
export default Component41409;
