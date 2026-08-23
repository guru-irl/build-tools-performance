import React from 'react';
const LABEL_6905 = 'component_6905';
export function Component6905({ value = 6905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6905, 'data-value': derived.doubled }, children);
}
export default Component6905;
