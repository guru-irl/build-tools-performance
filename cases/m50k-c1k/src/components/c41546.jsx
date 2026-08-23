import React from 'react';
const LABEL_41546 = 'component_41546';
export function Component41546({ value = 41546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41546, 'data-value': derived.doubled }, children);
}
export default Component41546;
