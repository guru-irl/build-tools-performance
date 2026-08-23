import React from 'react';
const LABEL_30739 = 'component_30739';
export function Component30739({ value = 30739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30739, 'data-value': derived.doubled }, children);
}
export default Component30739;
