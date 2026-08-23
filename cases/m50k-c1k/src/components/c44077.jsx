import React from 'react';
const LABEL_44077 = 'component_44077';
export function Component44077({ value = 44077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44077, 'data-value': derived.doubled }, children);
}
export default Component44077;
