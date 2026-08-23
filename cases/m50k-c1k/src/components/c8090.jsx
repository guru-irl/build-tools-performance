import React from 'react';
const LABEL_8090 = 'component_8090';
export function Component8090({ value = 8090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8090, 'data-value': derived.doubled }, children);
}
export default Component8090;
