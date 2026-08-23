import React from 'react';
const LABEL_42028 = 'component_42028';
export function Component42028({ value = 42028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42028, 'data-value': derived.doubled }, children);
}
export default Component42028;
