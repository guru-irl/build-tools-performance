import React from 'react';
const LABEL_19661 = 'component_19661';
export function Component19661({ value = 19661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19661, 'data-value': derived.doubled }, children);
}
export default Component19661;
