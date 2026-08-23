import React from 'react';
const LABEL_41458 = 'component_41458';
export function Component41458({ value = 41458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41458, 'data-value': derived.doubled }, children);
}
export default Component41458;
