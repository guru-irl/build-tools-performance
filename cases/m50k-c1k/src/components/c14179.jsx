import React from 'react';
const LABEL_14179 = 'component_14179';
export function Component14179({ value = 14179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14179, 'data-value': derived.doubled }, children);
}
export default Component14179;
