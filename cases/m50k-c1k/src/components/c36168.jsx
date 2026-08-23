import React from 'react';
const LABEL_36168 = 'component_36168';
export function Component36168({ value = 36168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36168, 'data-value': derived.doubled }, children);
}
export default Component36168;
