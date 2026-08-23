import React from 'react';
const LABEL_40524 = 'component_40524';
export function Component40524({ value = 40524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40524, 'data-value': derived.doubled }, children);
}
export default Component40524;
