import React from 'react';
const LABEL_43130 = 'component_43130';
export function Component43130({ value = 43130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43130, 'data-value': derived.doubled }, children);
}
export default Component43130;
