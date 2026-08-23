import React from 'react';
const LABEL_43486 = 'component_43486';
export function Component43486({ value = 43486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43486, 'data-value': derived.doubled }, children);
}
export default Component43486;
