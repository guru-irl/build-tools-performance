import React from 'react';
const LABEL_44905 = 'component_44905';
export function Component44905({ value = 44905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44905, 'data-value': derived.doubled }, children);
}
export default Component44905;
