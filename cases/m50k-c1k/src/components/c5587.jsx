import React from 'react';
const LABEL_5587 = 'component_5587';
export function Component5587({ value = 5587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5587, 'data-value': derived.doubled }, children);
}
export default Component5587;
