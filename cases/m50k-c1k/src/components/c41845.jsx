import React from 'react';
const LABEL_41845 = 'component_41845';
export function Component41845({ value = 41845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41845, 'data-value': derived.doubled }, children);
}
export default Component41845;
