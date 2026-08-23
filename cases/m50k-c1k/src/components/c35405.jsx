import React from 'react';
const LABEL_35405 = 'component_35405';
export function Component35405({ value = 35405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35405, 'data-value': derived.doubled }, children);
}
export default Component35405;
