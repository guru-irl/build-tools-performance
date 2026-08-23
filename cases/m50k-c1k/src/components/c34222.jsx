import React from 'react';
const LABEL_34222 = 'component_34222';
export function Component34222({ value = 34222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34222, 'data-value': derived.doubled }, children);
}
export default Component34222;
