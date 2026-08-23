import React from 'react';
const LABEL_11036 = 'component_11036';
export function Component11036({ value = 11036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11036, 'data-value': derived.doubled }, children);
}
export default Component11036;
