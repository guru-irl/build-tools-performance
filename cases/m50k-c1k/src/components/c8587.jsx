import React from 'react';
const LABEL_8587 = 'component_8587';
export function Component8587({ value = 8587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8587, 'data-value': derived.doubled }, children);
}
export default Component8587;
