import React from 'react';
const LABEL_46643 = 'component_46643';
export function Component46643({ value = 46643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46643, 'data-value': derived.doubled }, children);
}
export default Component46643;
