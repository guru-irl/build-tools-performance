import React from 'react';
const LABEL_4908 = 'component_4908';
export function Component4908({ value = 4908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4908, 'data-value': derived.doubled }, children);
}
export default Component4908;
