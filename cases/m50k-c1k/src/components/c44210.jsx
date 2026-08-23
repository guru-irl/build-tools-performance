import React from 'react';
const LABEL_44210 = 'component_44210';
export function Component44210({ value = 44210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44210, 'data-value': derived.doubled }, children);
}
export default Component44210;
