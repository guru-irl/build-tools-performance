import React from 'react';
const LABEL_8350 = 'component_8350';
export function Component8350({ value = 8350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8350, 'data-value': derived.doubled }, children);
}
export default Component8350;
