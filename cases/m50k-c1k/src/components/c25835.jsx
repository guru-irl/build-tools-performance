import React from 'react';
const LABEL_25835 = 'component_25835';
export function Component25835({ value = 25835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25835, 'data-value': derived.doubled }, children);
}
export default Component25835;
