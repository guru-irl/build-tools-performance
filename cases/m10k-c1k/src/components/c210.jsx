import React from 'react';
const LABEL_210 = 'component_210';
export function Component210({ value = 210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_210, 'data-value': derived.doubled }, children);
}
export default Component210;
