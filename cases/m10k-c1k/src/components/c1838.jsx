import React from 'react';
const LABEL_1838 = 'component_1838';
export function Component1838({ value = 1838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1838, 'data-value': derived.doubled }, children);
}
export default Component1838;
