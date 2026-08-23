import React from 'react';
const LABEL_5118 = 'component_5118';
export function Component5118({ value = 5118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5118, 'data-value': derived.doubled }, children);
}
export default Component5118;
