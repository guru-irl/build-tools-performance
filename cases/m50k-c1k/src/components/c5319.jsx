import React from 'react';
const LABEL_5319 = 'component_5319';
export function Component5319({ value = 5319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5319, 'data-value': derived.doubled }, children);
}
export default Component5319;
