import React from 'react';
const LABEL_46465 = 'component_46465';
export function Component46465({ value = 46465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46465, 'data-value': derived.doubled }, children);
}
export default Component46465;
