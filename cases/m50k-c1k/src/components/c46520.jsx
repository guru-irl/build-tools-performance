import React from 'react';
const LABEL_46520 = 'component_46520';
export function Component46520({ value = 46520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46520, 'data-value': derived.doubled }, children);
}
export default Component46520;
