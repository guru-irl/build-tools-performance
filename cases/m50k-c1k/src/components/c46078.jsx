import React from 'react';
const LABEL_46078 = 'component_46078';
export function Component46078({ value = 46078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46078, 'data-value': derived.doubled }, children);
}
export default Component46078;
