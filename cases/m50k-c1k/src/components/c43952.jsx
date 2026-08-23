import React from 'react';
const LABEL_43952 = 'component_43952';
export function Component43952({ value = 43952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43952, 'data-value': derived.doubled }, children);
}
export default Component43952;
