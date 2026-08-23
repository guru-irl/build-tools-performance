import React from 'react';
const LABEL_42313 = 'component_42313';
export function Component42313({ value = 42313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42313, 'data-value': derived.doubled }, children);
}
export default Component42313;
