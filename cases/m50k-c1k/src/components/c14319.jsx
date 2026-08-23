import React from 'react';
const LABEL_14319 = 'component_14319';
export function Component14319({ value = 14319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14319, 'data-value': derived.doubled }, children);
}
export default Component14319;
