import React from 'react';
const LABEL_19061 = 'component_19061';
export function Component19061({ value = 19061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19061, 'data-value': derived.doubled }, children);
}
export default Component19061;
