import React from 'react';
const LABEL_46449 = 'component_46449';
export function Component46449({ value = 46449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46449, 'data-value': derived.doubled }, children);
}
export default Component46449;
