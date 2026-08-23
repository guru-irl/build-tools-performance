import React from 'react';
const LABEL_45055 = 'component_45055';
export function Component45055({ value = 45055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45055, 'data-value': derived.doubled }, children);
}
export default Component45055;
