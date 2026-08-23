import React from 'react';
const LABEL_25062 = 'component_25062';
export function Component25062({ value = 25062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25062, 'data-value': derived.doubled }, children);
}
export default Component25062;
