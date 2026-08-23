import React from 'react';
const LABEL_8998 = 'component_8998';
export function Component8998({ value = 8998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8998, 'data-value': derived.doubled }, children);
}
export default Component8998;
