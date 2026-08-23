import React from 'react';
const LABEL_21417 = 'component_21417';
export function Component21417({ value = 21417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21417, 'data-value': derived.doubled }, children);
}
export default Component21417;
