import React from 'react';
const LABEL_31565 = 'component_31565';
export function Component31565({ value = 31565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31565, 'data-value': derived.doubled }, children);
}
export default Component31565;
