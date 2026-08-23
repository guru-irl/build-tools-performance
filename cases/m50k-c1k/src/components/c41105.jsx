import React from 'react';
const LABEL_41105 = 'component_41105';
export function Component41105({ value = 41105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41105, 'data-value': derived.doubled }, children);
}
export default Component41105;
