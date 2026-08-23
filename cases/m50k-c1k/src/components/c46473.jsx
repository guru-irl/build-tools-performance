import React from 'react';
const LABEL_46473 = 'component_46473';
export function Component46473({ value = 46473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46473, 'data-value': derived.doubled }, children);
}
export default Component46473;
