import React from 'react';
const LABEL_4712 = 'component_4712';
export function Component4712({ value = 4712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4712, 'data-value': derived.doubled }, children);
}
export default Component4712;
