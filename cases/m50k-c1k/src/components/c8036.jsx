import React from 'react';
const LABEL_8036 = 'component_8036';
export function Component8036({ value = 8036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8036, 'data-value': derived.doubled }, children);
}
export default Component8036;
