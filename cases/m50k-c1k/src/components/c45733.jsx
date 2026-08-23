import React from 'react';
const LABEL_45733 = 'component_45733';
export function Component45733({ value = 45733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45733, 'data-value': derived.doubled }, children);
}
export default Component45733;
