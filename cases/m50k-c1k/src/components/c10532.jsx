import React from 'react';
const LABEL_10532 = 'component_10532';
export function Component10532({ value = 10532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10532, 'data-value': derived.doubled }, children);
}
export default Component10532;
