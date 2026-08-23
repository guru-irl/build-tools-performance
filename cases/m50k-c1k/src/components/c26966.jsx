import React from 'react';
const LABEL_26966 = 'component_26966';
export function Component26966({ value = 26966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26966, 'data-value': derived.doubled }, children);
}
export default Component26966;
