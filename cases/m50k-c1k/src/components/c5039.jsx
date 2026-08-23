import React from 'react';
const LABEL_5039 = 'component_5039';
export function Component5039({ value = 5039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5039, 'data-value': derived.doubled }, children);
}
export default Component5039;
