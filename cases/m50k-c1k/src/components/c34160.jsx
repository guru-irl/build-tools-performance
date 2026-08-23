import React from 'react';
const LABEL_34160 = 'component_34160';
export function Component34160({ value = 34160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34160, 'data-value': derived.doubled }, children);
}
export default Component34160;
