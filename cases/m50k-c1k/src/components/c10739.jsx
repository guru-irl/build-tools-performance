import React from 'react';
const LABEL_10739 = 'component_10739';
export function Component10739({ value = 10739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10739, 'data-value': derived.doubled }, children);
}
export default Component10739;
