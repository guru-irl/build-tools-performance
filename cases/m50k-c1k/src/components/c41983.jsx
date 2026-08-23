import React from 'react';
const LABEL_41983 = 'component_41983';
export function Component41983({ value = 41983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41983, 'data-value': derived.doubled }, children);
}
export default Component41983;
