import React from 'react';
const LABEL_26983 = 'component_26983';
export function Component26983({ value = 26983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26983, 'data-value': derived.doubled }, children);
}
export default Component26983;
