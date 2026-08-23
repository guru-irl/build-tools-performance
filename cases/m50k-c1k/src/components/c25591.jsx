import React from 'react';
const LABEL_25591 = 'component_25591';
export function Component25591({ value = 25591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25591, 'data-value': derived.doubled }, children);
}
export default Component25591;
