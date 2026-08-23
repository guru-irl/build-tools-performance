import React from 'react';
const LABEL_25105 = 'component_25105';
export function Component25105({ value = 25105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25105, 'data-value': derived.doubled }, children);
}
export default Component25105;
