import React from 'react';
const LABEL_36115 = 'component_36115';
export function Component36115({ value = 36115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36115, 'data-value': derived.doubled }, children);
}
export default Component36115;
