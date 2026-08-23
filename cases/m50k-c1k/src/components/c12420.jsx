import React from 'react';
const LABEL_12420 = 'component_12420';
export function Component12420({ value = 12420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12420, 'data-value': derived.doubled }, children);
}
export default Component12420;
