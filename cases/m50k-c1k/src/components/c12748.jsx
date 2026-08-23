import React from 'react';
const LABEL_12748 = 'component_12748';
export function Component12748({ value = 12748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12748, 'data-value': derived.doubled }, children);
}
export default Component12748;
