import React from 'react';
const LABEL_4524 = 'component_4524';
export function Component4524({ value = 4524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4524, 'data-value': derived.doubled }, children);
}
export default Component4524;
