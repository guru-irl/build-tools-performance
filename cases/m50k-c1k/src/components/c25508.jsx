import React from 'react';
const LABEL_25508 = 'component_25508';
export function Component25508({ value = 25508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25508, 'data-value': derived.doubled }, children);
}
export default Component25508;
