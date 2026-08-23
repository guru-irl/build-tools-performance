import React from 'react';
const LABEL_13524 = 'component_13524';
export function Component13524({ value = 13524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13524, 'data-value': derived.doubled }, children);
}
export default Component13524;
