import React from 'react';
const LABEL_26107 = 'component_26107';
export function Component26107({ value = 26107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26107, 'data-value': derived.doubled }, children);
}
export default Component26107;
