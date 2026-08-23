import React from 'react';
const LABEL_45075 = 'component_45075';
export function Component45075({ value = 45075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45075, 'data-value': derived.doubled }, children);
}
export default Component45075;
