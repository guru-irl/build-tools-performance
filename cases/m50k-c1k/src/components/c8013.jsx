import React from 'react';
const LABEL_8013 = 'component_8013';
export function Component8013({ value = 8013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8013, 'data-value': derived.doubled }, children);
}
export default Component8013;
