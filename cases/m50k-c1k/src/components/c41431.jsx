import React from 'react';
const LABEL_41431 = 'component_41431';
export function Component41431({ value = 41431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41431, 'data-value': derived.doubled }, children);
}
export default Component41431;
