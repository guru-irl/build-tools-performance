import React from 'react';
const LABEL_27950 = 'component_27950';
export function Component27950({ value = 27950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27950, 'data-value': derived.doubled }, children);
}
export default Component27950;
