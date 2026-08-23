import React from 'react';
const LABEL_43764 = 'component_43764';
export function Component43764({ value = 43764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43764, 'data-value': derived.doubled }, children);
}
export default Component43764;
