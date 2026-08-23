import React from 'react';
const LABEL_34455 = 'component_34455';
export function Component34455({ value = 34455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34455, 'data-value': derived.doubled }, children);
}
export default Component34455;
