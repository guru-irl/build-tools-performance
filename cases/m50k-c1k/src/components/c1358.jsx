import React from 'react';
const LABEL_1358 = 'component_1358';
export function Component1358({ value = 1358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1358, 'data-value': derived.doubled }, children);
}
export default Component1358;
