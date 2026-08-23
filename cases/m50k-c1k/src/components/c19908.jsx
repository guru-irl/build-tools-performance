import React from 'react';
const LABEL_19908 = 'component_19908';
export function Component19908({ value = 19908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19908, 'data-value': derived.doubled }, children);
}
export default Component19908;
