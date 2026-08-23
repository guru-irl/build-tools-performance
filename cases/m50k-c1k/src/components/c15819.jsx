import React from 'react';
const LABEL_15819 = 'component_15819';
export function Component15819({ value = 15819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15819, 'data-value': derived.doubled }, children);
}
export default Component15819;
