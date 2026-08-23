import React from 'react';
const LABEL_45173 = 'component_45173';
export function Component45173({ value = 45173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45173, 'data-value': derived.doubled }, children);
}
export default Component45173;
