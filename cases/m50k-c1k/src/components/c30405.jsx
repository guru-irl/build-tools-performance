import React from 'react';
const LABEL_30405 = 'component_30405';
export function Component30405({ value = 30405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30405, 'data-value': derived.doubled }, children);
}
export default Component30405;
