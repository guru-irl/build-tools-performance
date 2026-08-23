import React from 'react';
const LABEL_28954 = 'component_28954';
export function Component28954({ value = 28954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28954, 'data-value': derived.doubled }, children);
}
export default Component28954;
