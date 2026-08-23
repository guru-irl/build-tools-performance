import React from 'react';
const LABEL_40078 = 'component_40078';
export function Component40078({ value = 40078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40078, 'data-value': derived.doubled }, children);
}
export default Component40078;
