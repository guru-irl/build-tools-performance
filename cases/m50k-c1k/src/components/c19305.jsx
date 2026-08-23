import React from 'react';
const LABEL_19305 = 'component_19305';
export function Component19305({ value = 19305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19305, 'data-value': derived.doubled }, children);
}
export default Component19305;
