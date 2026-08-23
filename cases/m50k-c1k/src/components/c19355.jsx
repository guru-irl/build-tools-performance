import React from 'react';
const LABEL_19355 = 'component_19355';
export function Component19355({ value = 19355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19355, 'data-value': derived.doubled }, children);
}
export default Component19355;
