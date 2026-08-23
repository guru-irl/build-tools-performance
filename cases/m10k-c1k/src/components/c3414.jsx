import React from 'react';
const LABEL_3414 = 'component_3414';
export function Component3414({ value = 3414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3414, 'data-value': derived.doubled }, children);
}
export default Component3414;
