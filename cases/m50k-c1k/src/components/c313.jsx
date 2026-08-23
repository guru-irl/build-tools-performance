import React from 'react';
const LABEL_313 = 'component_313';
export function Component313({ value = 313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_313, 'data-value': derived.doubled }, children);
}
export default Component313;
