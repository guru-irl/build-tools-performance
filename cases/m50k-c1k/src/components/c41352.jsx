import React from 'react';
const LABEL_41352 = 'component_41352';
export function Component41352({ value = 41352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41352, 'data-value': derived.doubled }, children);
}
export default Component41352;
