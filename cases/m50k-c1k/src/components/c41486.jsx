import React from 'react';
const LABEL_41486 = 'component_41486';
export function Component41486({ value = 41486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41486, 'data-value': derived.doubled }, children);
}
export default Component41486;
