import React from 'react';
const LABEL_41185 = 'component_41185';
export function Component41185({ value = 41185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41185, 'data-value': derived.doubled }, children);
}
export default Component41185;
