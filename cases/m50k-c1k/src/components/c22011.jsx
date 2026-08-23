import React from 'react';
const LABEL_22011 = 'component_22011';
export function Component22011({ value = 22011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22011, 'data-value': derived.doubled }, children);
}
export default Component22011;
