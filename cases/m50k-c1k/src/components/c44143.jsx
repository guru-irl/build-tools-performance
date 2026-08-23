import React from 'react';
const LABEL_44143 = 'component_44143';
export function Component44143({ value = 44143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44143, 'data-value': derived.doubled }, children);
}
export default Component44143;
