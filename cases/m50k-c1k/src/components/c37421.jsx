import React from 'react';
const LABEL_37421 = 'component_37421';
export function Component37421({ value = 37421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37421, 'data-value': derived.doubled }, children);
}
export default Component37421;
