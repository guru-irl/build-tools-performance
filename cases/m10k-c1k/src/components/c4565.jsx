import React from 'react';
const LABEL_4565 = 'component_4565';
export function Component4565({ value = 4565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4565, 'data-value': derived.doubled }, children);
}
export default Component4565;
