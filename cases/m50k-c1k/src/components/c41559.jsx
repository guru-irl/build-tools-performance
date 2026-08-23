import React from 'react';
const LABEL_41559 = 'component_41559';
export function Component41559({ value = 41559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41559, 'data-value': derived.doubled }, children);
}
export default Component41559;
