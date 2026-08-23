import React from 'react';
const LABEL_8241 = 'component_8241';
export function Component8241({ value = 8241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8241, 'data-value': derived.doubled }, children);
}
export default Component8241;
