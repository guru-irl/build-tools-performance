import React from 'react';
const LABEL_4884 = 'component_4884';
export function Component4884({ value = 4884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4884, 'data-value': derived.doubled }, children);
}
export default Component4884;
