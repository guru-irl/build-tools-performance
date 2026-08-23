import React from 'react';
const LABEL_27345 = 'component_27345';
export function Component27345({ value = 27345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27345, 'data-value': derived.doubled }, children);
}
export default Component27345;
