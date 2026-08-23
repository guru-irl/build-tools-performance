import React from 'react';
const LABEL_40432 = 'component_40432';
export function Component40432({ value = 40432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40432, 'data-value': derived.doubled }, children);
}
export default Component40432;
