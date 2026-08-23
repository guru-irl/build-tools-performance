import React from 'react';
const LABEL_41175 = 'component_41175';
export function Component41175({ value = 41175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41175, 'data-value': derived.doubled }, children);
}
export default Component41175;
