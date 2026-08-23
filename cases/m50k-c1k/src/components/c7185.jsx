import React from 'react';
const LABEL_7185 = 'component_7185';
export function Component7185({ value = 7185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7185, 'data-value': derived.doubled }, children);
}
export default Component7185;
