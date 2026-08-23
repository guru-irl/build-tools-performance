import React from 'react';
const LABEL_19897 = 'component_19897';
export function Component19897({ value = 19897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19897, 'data-value': derived.doubled }, children);
}
export default Component19897;
