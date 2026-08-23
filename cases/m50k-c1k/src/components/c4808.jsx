import React from 'react';
const LABEL_4808 = 'component_4808';
export function Component4808({ value = 4808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4808, 'data-value': derived.doubled }, children);
}
export default Component4808;
