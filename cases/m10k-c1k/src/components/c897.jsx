import React from 'react';
const LABEL_897 = 'component_897';
export function Component897({ value = 897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_897, 'data-value': derived.doubled }, children);
}
export default Component897;
