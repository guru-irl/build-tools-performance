import React from 'react';
const LABEL_43357 = 'component_43357';
export function Component43357({ value = 43357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43357, 'data-value': derived.doubled }, children);
}
export default Component43357;
