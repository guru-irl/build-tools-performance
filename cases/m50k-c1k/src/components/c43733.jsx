import React from 'react';
const LABEL_43733 = 'component_43733';
export function Component43733({ value = 43733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43733, 'data-value': derived.doubled }, children);
}
export default Component43733;
