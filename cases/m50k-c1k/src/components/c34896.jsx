import React from 'react';
const LABEL_34896 = 'component_34896';
export function Component34896({ value = 34896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34896, 'data-value': derived.doubled }, children);
}
export default Component34896;
