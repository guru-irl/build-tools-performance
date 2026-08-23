import React from 'react';
const LABEL_37049 = 'component_37049';
export function Component37049({ value = 37049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37049, 'data-value': derived.doubled }, children);
}
export default Component37049;
