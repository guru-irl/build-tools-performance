import React from 'react';
const LABEL_8711 = 'component_8711';
export function Component8711({ value = 8711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8711, 'data-value': derived.doubled }, children);
}
export default Component8711;
