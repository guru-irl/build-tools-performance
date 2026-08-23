import React from 'react';
const LABEL_13034 = 'component_13034';
export function Component13034({ value = 13034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13034, 'data-value': derived.doubled }, children);
}
export default Component13034;
