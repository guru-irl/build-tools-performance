import React from 'react';
const LABEL_19960 = 'component_19960';
export function Component19960({ value = 19960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19960, 'data-value': derived.doubled }, children);
}
export default Component19960;
