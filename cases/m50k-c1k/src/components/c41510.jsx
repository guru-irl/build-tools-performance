import React from 'react';
const LABEL_41510 = 'component_41510';
export function Component41510({ value = 41510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41510, 'data-value': derived.doubled }, children);
}
export default Component41510;
