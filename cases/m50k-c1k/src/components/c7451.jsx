import React from 'react';
const LABEL_7451 = 'component_7451';
export function Component7451({ value = 7451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7451, 'data-value': derived.doubled }, children);
}
export default Component7451;
