import React from 'react';
const LABEL_19022 = 'component_19022';
export function Component19022({ value = 19022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19022, 'data-value': derived.doubled }, children);
}
export default Component19022;
