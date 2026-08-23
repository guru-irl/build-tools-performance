import React from 'react';
const LABEL_45136 = 'component_45136';
export function Component45136({ value = 45136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45136, 'data-value': derived.doubled }, children);
}
export default Component45136;
