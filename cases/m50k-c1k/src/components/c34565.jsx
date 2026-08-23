import React from 'react';
const LABEL_34565 = 'component_34565';
export function Component34565({ value = 34565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34565, 'data-value': derived.doubled }, children);
}
export default Component34565;
