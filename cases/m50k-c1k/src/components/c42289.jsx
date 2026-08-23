import React from 'react';
const LABEL_42289 = 'component_42289';
export function Component42289({ value = 42289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42289, 'data-value': derived.doubled }, children);
}
export default Component42289;
