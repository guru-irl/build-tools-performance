import React from 'react';
const LABEL_45423 = 'component_45423';
export function Component45423({ value = 45423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45423, 'data-value': derived.doubled }, children);
}
export default Component45423;
