import React from 'react';
const LABEL_14950 = 'component_14950';
export function Component14950({ value = 14950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14950, 'data-value': derived.doubled }, children);
}
export default Component14950;
