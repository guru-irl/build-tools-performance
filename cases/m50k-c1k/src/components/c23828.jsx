import React from 'react';
const LABEL_23828 = 'component_23828';
export function Component23828({ value = 23828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23828, 'data-value': derived.doubled }, children);
}
export default Component23828;
