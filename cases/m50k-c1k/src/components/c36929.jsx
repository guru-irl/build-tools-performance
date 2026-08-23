import React from 'react';
const LABEL_36929 = 'component_36929';
export function Component36929({ value = 36929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36929, 'data-value': derived.doubled }, children);
}
export default Component36929;
