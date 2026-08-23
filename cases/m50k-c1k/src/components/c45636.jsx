import React from 'react';
const LABEL_45636 = 'component_45636';
export function Component45636({ value = 45636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45636, 'data-value': derived.doubled }, children);
}
export default Component45636;
