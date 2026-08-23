import React from 'react';
const LABEL_10313 = 'component_10313';
export function Component10313({ value = 10313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10313, 'data-value': derived.doubled }, children);
}
export default Component10313;
