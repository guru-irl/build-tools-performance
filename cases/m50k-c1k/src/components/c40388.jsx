import React from 'react';
const LABEL_40388 = 'component_40388';
export function Component40388({ value = 40388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40388, 'data-value': derived.doubled }, children);
}
export default Component40388;
