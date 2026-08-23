import React from 'react';
const LABEL_16643 = 'component_16643';
export function Component16643({ value = 16643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16643, 'data-value': derived.doubled }, children);
}
export default Component16643;
