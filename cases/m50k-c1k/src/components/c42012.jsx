import React from 'react';
const LABEL_42012 = 'component_42012';
export function Component42012({ value = 42012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42012, 'data-value': derived.doubled }, children);
}
export default Component42012;
