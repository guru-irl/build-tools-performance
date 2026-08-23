import React from 'react';
const LABEL_4907 = 'component_4907';
export function Component4907({ value = 4907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4907, 'data-value': derived.doubled }, children);
}
export default Component4907;
