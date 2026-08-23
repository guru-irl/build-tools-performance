import React from 'react';
const LABEL_25581 = 'component_25581';
export function Component25581({ value = 25581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25581, 'data-value': derived.doubled }, children);
}
export default Component25581;
