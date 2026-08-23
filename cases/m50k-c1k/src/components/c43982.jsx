import React from 'react';
const LABEL_43982 = 'component_43982';
export function Component43982({ value = 43982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43982, 'data-value': derived.doubled }, children);
}
export default Component43982;
