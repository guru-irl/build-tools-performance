import React from 'react';
const LABEL_45506 = 'component_45506';
export function Component45506({ value = 45506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45506, 'data-value': derived.doubled }, children);
}
export default Component45506;
