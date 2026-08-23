import React from 'react';
const LABEL_28951 = 'component_28951';
export function Component28951({ value = 28951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28951, 'data-value': derived.doubled }, children);
}
export default Component28951;
