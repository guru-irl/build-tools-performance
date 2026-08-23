import React from 'react';
const LABEL_10244 = 'component_10244';
export function Component10244({ value = 10244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10244, 'data-value': derived.doubled }, children);
}
export default Component10244;
