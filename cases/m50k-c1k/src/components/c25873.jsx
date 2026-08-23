import React from 'react';
const LABEL_25873 = 'component_25873';
export function Component25873({ value = 25873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25873, 'data-value': derived.doubled }, children);
}
export default Component25873;
