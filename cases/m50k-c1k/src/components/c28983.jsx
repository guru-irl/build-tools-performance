import React from 'react';
const LABEL_28983 = 'component_28983';
export function Component28983({ value = 28983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28983, 'data-value': derived.doubled }, children);
}
export default Component28983;
