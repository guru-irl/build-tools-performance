import React from 'react';
const LABEL_11982 = 'component_11982';
export function Component11982({ value = 11982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11982, 'data-value': derived.doubled }, children);
}
export default Component11982;
