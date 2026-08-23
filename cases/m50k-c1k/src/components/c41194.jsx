import React from 'react';
const LABEL_41194 = 'component_41194';
export function Component41194({ value = 41194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41194, 'data-value': derived.doubled }, children);
}
export default Component41194;
