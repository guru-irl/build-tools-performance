import React from 'react';
const LABEL_35094 = 'component_35094';
export function Component35094({ value = 35094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35094, 'data-value': derived.doubled }, children);
}
export default Component35094;
