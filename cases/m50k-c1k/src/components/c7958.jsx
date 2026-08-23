import React from 'react';
const LABEL_7958 = 'component_7958';
export function Component7958({ value = 7958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7958, 'data-value': derived.doubled }, children);
}
export default Component7958;
