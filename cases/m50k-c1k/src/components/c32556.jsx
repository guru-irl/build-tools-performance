import React from 'react';
const LABEL_32556 = 'component_32556';
export function Component32556({ value = 32556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32556, 'data-value': derived.doubled }, children);
}
export default Component32556;
