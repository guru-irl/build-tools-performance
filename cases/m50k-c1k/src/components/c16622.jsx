import React from 'react';
const LABEL_16622 = 'component_16622';
export function Component16622({ value = 16622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16622, 'data-value': derived.doubled }, children);
}
export default Component16622;
