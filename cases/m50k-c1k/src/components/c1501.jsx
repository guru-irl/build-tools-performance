import React from 'react';
const LABEL_1501 = 'component_1501';
export function Component1501({ value = 1501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1501, 'data-value': derived.doubled }, children);
}
export default Component1501;
