import React from 'react';
const LABEL_25295 = 'component_25295';
export function Component25295({ value = 25295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25295, 'data-value': derived.doubled }, children);
}
export default Component25295;
