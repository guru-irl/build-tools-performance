import React from 'react';
const LABEL_41153 = 'component_41153';
export function Component41153({ value = 41153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41153, 'data-value': derived.doubled }, children);
}
export default Component41153;
