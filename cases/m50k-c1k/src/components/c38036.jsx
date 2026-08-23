import React from 'react';
const LABEL_38036 = 'component_38036';
export function Component38036({ value = 38036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38036, 'data-value': derived.doubled }, children);
}
export default Component38036;
