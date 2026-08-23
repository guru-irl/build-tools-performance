import React from 'react';
const LABEL_28185 = 'component_28185';
export function Component28185({ value = 28185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28185, 'data-value': derived.doubled }, children);
}
export default Component28185;
