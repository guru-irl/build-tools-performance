import React from 'react';
const LABEL_34204 = 'component_34204';
export function Component34204({ value = 34204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34204, 'data-value': derived.doubled }, children);
}
export default Component34204;
