import React from 'react';
const LABEL_4905 = 'component_4905';
export function Component4905({ value = 4905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4905, 'data-value': derived.doubled }, children);
}
export default Component4905;
