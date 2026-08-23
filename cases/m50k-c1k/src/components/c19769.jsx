import React from 'react';
const LABEL_19769 = 'component_19769';
export function Component19769({ value = 19769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19769, 'data-value': derived.doubled }, children);
}
export default Component19769;
