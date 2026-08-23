import React from 'react';
const LABEL_4139 = 'component_4139';
export function Component4139({ value = 4139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4139, 'data-value': derived.doubled }, children);
}
export default Component4139;
