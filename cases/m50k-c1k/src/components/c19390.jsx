import React from 'react';
const LABEL_19390 = 'component_19390';
export function Component19390({ value = 19390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19390, 'data-value': derived.doubled }, children);
}
export default Component19390;
