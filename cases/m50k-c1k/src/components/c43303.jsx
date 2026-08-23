import React from 'react';
const LABEL_43303 = 'component_43303';
export function Component43303({ value = 43303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43303, 'data-value': derived.doubled }, children);
}
export default Component43303;
