import React from 'react';
const LABEL_19627 = 'component_19627';
export function Component19627({ value = 19627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19627, 'data-value': derived.doubled }, children);
}
export default Component19627;
