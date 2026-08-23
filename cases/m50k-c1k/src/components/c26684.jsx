import React from 'react';
const LABEL_26684 = 'component_26684';
export function Component26684({ value = 26684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26684, 'data-value': derived.doubled }, children);
}
export default Component26684;
