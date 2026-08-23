import React from 'react';
const LABEL_30846 = 'component_30846';
export function Component30846({ value = 30846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30846, 'data-value': derived.doubled }, children);
}
export default Component30846;
