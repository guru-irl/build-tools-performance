import React from 'react';
const LABEL_10405 = 'component_10405';
export function Component10405({ value = 10405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10405, 'data-value': derived.doubled }, children);
}
export default Component10405;
