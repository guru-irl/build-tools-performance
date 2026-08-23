import React from 'react';
const LABEL_36897 = 'component_36897';
export function Component36897({ value = 36897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36897, 'data-value': derived.doubled }, children);
}
export default Component36897;
