import React from 'react';
const LABEL_45995 = 'component_45995';
export function Component45995({ value = 45995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45995, 'data-value': derived.doubled }, children);
}
export default Component45995;
