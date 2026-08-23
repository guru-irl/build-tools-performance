import React from 'react';
const LABEL_45774 = 'component_45774';
export function Component45774({ value = 45774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45774, 'data-value': derived.doubled }, children);
}
export default Component45774;
