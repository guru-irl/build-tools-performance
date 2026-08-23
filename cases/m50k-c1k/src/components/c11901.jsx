import React from 'react';
const LABEL_11901 = 'component_11901';
export function Component11901({ value = 11901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11901, 'data-value': derived.doubled }, children);
}
export default Component11901;
