import React from 'react';
const LABEL_26013 = 'component_26013';
export function Component26013({ value = 26013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26013, 'data-value': derived.doubled }, children);
}
export default Component26013;
