import React from 'react';
const LABEL_19195 = 'component_19195';
export function Component19195({ value = 19195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19195, 'data-value': derived.doubled }, children);
}
export default Component19195;
