import React from 'react';
const LABEL_28028 = 'component_28028';
export function Component28028({ value = 28028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28028, 'data-value': derived.doubled }, children);
}
export default Component28028;
