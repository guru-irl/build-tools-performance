import React from 'react';
const LABEL_18028 = 'component_18028';
export function Component18028({ value = 18028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18028, 'data-value': derived.doubled }, children);
}
export default Component18028;
