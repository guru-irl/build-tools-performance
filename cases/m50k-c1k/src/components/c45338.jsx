import React from 'react';
const LABEL_45338 = 'component_45338';
export function Component45338({ value = 45338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45338, 'data-value': derived.doubled }, children);
}
export default Component45338;
