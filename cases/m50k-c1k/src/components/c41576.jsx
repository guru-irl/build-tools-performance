import React from 'react';
const LABEL_41576 = 'component_41576';
export function Component41576({ value = 41576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41576, 'data-value': derived.doubled }, children);
}
export default Component41576;
