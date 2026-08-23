import React from 'react';
const LABEL_31983 = 'component_31983';
export function Component31983({ value = 31983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31983, 'data-value': derived.doubled }, children);
}
export default Component31983;
