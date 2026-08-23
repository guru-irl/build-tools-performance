import React from 'react';
const LABEL_27684 = 'component_27684';
export function Component27684({ value = 27684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27684, 'data-value': derived.doubled }, children);
}
export default Component27684;
