import React from 'react';
const LABEL_16217 = 'component_16217';
export function Component16217({ value = 16217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16217, 'data-value': derived.doubled }, children);
}
export default Component16217;
