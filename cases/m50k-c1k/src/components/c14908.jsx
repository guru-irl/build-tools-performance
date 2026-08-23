import React from 'react';
const LABEL_14908 = 'component_14908';
export function Component14908({ value = 14908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14908, 'data-value': derived.doubled }, children);
}
export default Component14908;
