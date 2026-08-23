import React from 'react';
const LABEL_19896 = 'component_19896';
export function Component19896({ value = 19896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19896, 'data-value': derived.doubled }, children);
}
export default Component19896;
