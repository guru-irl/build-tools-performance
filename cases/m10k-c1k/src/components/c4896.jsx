import React from 'react';
const LABEL_4896 = 'component_4896';
export function Component4896({ value = 4896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4896, 'data-value': derived.doubled }, children);
}
export default Component4896;
