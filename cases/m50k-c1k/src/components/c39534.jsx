import React from 'react';
const LABEL_39534 = 'component_39534';
export function Component39534({ value = 39534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39534, 'data-value': derived.doubled }, children);
}
export default Component39534;
