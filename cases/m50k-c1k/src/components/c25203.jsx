import React from 'react';
const LABEL_25203 = 'component_25203';
export function Component25203({ value = 25203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25203, 'data-value': derived.doubled }, children);
}
export default Component25203;
