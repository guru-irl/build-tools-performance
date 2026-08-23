import React from 'react';
const LABEL_34983 = 'component_34983';
export function Component34983({ value = 34983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34983, 'data-value': derived.doubled }, children);
}
export default Component34983;
