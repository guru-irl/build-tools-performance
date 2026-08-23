import React from 'react';
const LABEL_19677 = 'component_19677';
export function Component19677({ value = 19677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19677, 'data-value': derived.doubled }, children);
}
export default Component19677;
