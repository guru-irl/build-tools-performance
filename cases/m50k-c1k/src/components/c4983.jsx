import React from 'react';
const LABEL_4983 = 'component_4983';
export function Component4983({ value = 4983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4983, 'data-value': derived.doubled }, children);
}
export default Component4983;
