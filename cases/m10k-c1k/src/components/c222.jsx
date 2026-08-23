import React from 'react';
const LABEL_222 = 'component_222';
export function Component222({ value = 222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_222, 'data-value': derived.doubled }, children);
}
export default Component222;
