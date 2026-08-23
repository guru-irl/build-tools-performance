import React from 'react';
const LABEL_4185 = 'component_4185';
export function Component4185({ value = 4185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4185, 'data-value': derived.doubled }, children);
}
export default Component4185;
