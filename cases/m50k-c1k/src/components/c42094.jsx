import React from 'react';
const LABEL_42094 = 'component_42094';
export function Component42094({ value = 42094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42094, 'data-value': derived.doubled }, children);
}
export default Component42094;
