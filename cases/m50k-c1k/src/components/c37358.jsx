import React from 'react';
const LABEL_37358 = 'component_37358';
export function Component37358({ value = 37358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37358, 'data-value': derived.doubled }, children);
}
export default Component37358;
