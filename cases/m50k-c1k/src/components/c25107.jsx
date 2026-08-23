import React from 'react';
const LABEL_25107 = 'component_25107';
export function Component25107({ value = 25107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25107, 'data-value': derived.doubled }, children);
}
export default Component25107;
