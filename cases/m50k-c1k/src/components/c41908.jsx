import React from 'react';
const LABEL_41908 = 'component_41908';
export function Component41908({ value = 41908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41908, 'data-value': derived.doubled }, children);
}
export default Component41908;
