import React from 'react';
const LABEL_41359 = 'component_41359';
export function Component41359({ value = 41359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41359, 'data-value': derived.doubled }, children);
}
export default Component41359;
