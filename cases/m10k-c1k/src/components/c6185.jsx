import React from 'react';
const LABEL_6185 = 'component_6185';
export function Component6185({ value = 6185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6185, 'data-value': derived.doubled }, children);
}
export default Component6185;
