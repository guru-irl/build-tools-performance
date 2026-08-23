import React from 'react';
const LABEL_28401 = 'component_28401';
export function Component28401({ value = 28401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28401, 'data-value': derived.doubled }, children);
}
export default Component28401;
