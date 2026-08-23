import React from 'react';
const LABEL_20682 = 'component_20682';
export function Component20682({ value = 20682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20682, 'data-value': derived.doubled }, children);
}
export default Component20682;
