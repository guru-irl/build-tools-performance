import React from 'react';
const LABEL_46507 = 'component_46507';
export function Component46507({ value = 46507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46507, 'data-value': derived.doubled }, children);
}
export default Component46507;
