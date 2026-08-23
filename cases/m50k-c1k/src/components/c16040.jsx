import React from 'react';
const LABEL_16040 = 'component_16040';
export function Component16040({ value = 16040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16040, 'data-value': derived.doubled }, children);
}
export default Component16040;
