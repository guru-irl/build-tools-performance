import React from 'react';
const LABEL_37087 = 'component_37087';
export function Component37087({ value = 37087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37087, 'data-value': derived.doubled }, children);
}
export default Component37087;
