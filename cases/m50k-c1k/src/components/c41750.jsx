import React from 'react';
const LABEL_41750 = 'component_41750';
export function Component41750({ value = 41750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41750, 'data-value': derived.doubled }, children);
}
export default Component41750;
