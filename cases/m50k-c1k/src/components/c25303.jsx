import React from 'react';
const LABEL_25303 = 'component_25303';
export function Component25303({ value = 25303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25303, 'data-value': derived.doubled }, children);
}
export default Component25303;
