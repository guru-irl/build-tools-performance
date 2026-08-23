import React from 'react';
const LABEL_27681 = 'component_27681';
export function Component27681({ value = 27681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27681, 'data-value': derived.doubled }, children);
}
export default Component27681;
