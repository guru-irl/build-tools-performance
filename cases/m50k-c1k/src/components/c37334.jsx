import React from 'react';
const LABEL_37334 = 'component_37334';
export function Component37334({ value = 37334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37334, 'data-value': derived.doubled }, children);
}
export default Component37334;
