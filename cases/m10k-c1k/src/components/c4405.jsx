import React from 'react';
const LABEL_4405 = 'component_4405';
export function Component4405({ value = 4405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4405, 'data-value': derived.doubled }, children);
}
export default Component4405;
