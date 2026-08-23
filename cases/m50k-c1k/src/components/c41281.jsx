import React from 'react';
const LABEL_41281 = 'component_41281';
export function Component41281({ value = 41281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41281, 'data-value': derived.doubled }, children);
}
export default Component41281;
