import React from 'react';
const LABEL_29983 = 'component_29983';
export function Component29983({ value = 29983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29983, 'data-value': derived.doubled }, children);
}
export default Component29983;
