import React from 'react';
const LABEL_37737 = 'component_37737';
export function Component37737({ value = 37737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37737, 'data-value': derived.doubled }, children);
}
export default Component37737;
