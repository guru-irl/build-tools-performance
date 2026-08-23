import React from 'react';
const LABEL_35745 = 'component_35745';
export function Component35745({ value = 35745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35745, 'data-value': derived.doubled }, children);
}
export default Component35745;
