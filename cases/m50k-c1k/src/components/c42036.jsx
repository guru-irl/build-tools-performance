import React from 'react';
const LABEL_42036 = 'component_42036';
export function Component42036({ value = 42036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42036, 'data-value': derived.doubled }, children);
}
export default Component42036;
