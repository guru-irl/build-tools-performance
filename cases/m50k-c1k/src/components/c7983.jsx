import React from 'react';
const LABEL_7983 = 'component_7983';
export function Component7983({ value = 7983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7983, 'data-value': derived.doubled }, children);
}
export default Component7983;
