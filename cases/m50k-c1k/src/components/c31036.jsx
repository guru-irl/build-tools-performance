import React from 'react';
const LABEL_31036 = 'component_31036';
export function Component31036({ value = 31036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31036, 'data-value': derived.doubled }, children);
}
export default Component31036;
