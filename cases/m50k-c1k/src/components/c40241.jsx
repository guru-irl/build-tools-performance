import React from 'react';
const LABEL_40241 = 'component_40241';
export function Component40241({ value = 40241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40241, 'data-value': derived.doubled }, children);
}
export default Component40241;
