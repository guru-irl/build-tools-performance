import React from 'react';
const LABEL_966 = 'component_966';
export function Component966({ value = 966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_966, 'data-value': derived.doubled }, children);
}
export default Component966;
