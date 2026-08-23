import React from 'react';
const LABEL_42307 = 'component_42307';
export function Component42307({ value = 42307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42307, 'data-value': derived.doubled }, children);
}
export default Component42307;
