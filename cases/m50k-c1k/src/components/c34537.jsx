import React from 'react';
const LABEL_34537 = 'component_34537';
export function Component34537({ value = 34537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34537, 'data-value': derived.doubled }, children);
}
export default Component34537;
