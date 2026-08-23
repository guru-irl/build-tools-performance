import React from 'react';
const LABEL_26181 = 'component_26181';
export function Component26181({ value = 26181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26181, 'data-value': derived.doubled }, children);
}
export default Component26181;
