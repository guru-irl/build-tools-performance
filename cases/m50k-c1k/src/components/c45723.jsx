import React from 'react';
const LABEL_45723 = 'component_45723';
export function Component45723({ value = 45723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45723, 'data-value': derived.doubled }, children);
}
export default Component45723;
