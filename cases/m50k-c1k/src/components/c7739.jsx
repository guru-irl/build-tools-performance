import React from 'react';
const LABEL_7739 = 'component_7739';
export function Component7739({ value = 7739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7739, 'data-value': derived.doubled }, children);
}
export default Component7739;
