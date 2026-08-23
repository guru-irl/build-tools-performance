import React from 'react';
const LABEL_37347 = 'component_37347';
export function Component37347({ value = 37347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37347, 'data-value': derived.doubled }, children);
}
export default Component37347;
