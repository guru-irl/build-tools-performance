import React from 'react';
const LABEL_22768 = 'component_22768';
export function Component22768({ value = 22768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22768, 'data-value': derived.doubled }, children);
}
export default Component22768;
