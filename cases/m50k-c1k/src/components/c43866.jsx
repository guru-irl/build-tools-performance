import React from 'react';
const LABEL_43866 = 'component_43866';
export function Component43866({ value = 43866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43866, 'data-value': derived.doubled }, children);
}
export default Component43866;
