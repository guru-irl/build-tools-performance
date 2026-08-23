import React from 'react';
const LABEL_1191 = 'component_1191';
export function Component1191({ value = 1191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1191, 'data-value': derived.doubled }, children);
}
export default Component1191;
