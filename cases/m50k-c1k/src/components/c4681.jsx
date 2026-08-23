import React from 'react';
const LABEL_4681 = 'component_4681';
export function Component4681({ value = 4681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4681, 'data-value': derived.doubled }, children);
}
export default Component4681;
