import React from 'react';
const LABEL_45028 = 'component_45028';
export function Component45028({ value = 45028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45028, 'data-value': derived.doubled }, children);
}
export default Component45028;
