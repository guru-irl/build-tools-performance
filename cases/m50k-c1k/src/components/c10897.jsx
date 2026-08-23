import React from 'react';
const LABEL_10897 = 'component_10897';
export function Component10897({ value = 10897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10897, 'data-value': derived.doubled }, children);
}
export default Component10897;
