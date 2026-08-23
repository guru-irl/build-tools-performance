import React from 'react';
const LABEL_25659 = 'component_25659';
export function Component25659({ value = 25659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25659, 'data-value': derived.doubled }, children);
}
export default Component25659;
