import React from 'react';
const LABEL_40460 = 'component_40460';
export function Component40460({ value = 40460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40460, 'data-value': derived.doubled }, children);
}
export default Component40460;
