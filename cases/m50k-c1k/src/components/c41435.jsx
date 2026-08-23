import React from 'react';
const LABEL_41435 = 'component_41435';
export function Component41435({ value = 41435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41435, 'data-value': derived.doubled }, children);
}
export default Component41435;
