import React from 'react';
const LABEL_43925 = 'component_43925';
export function Component43925({ value = 43925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43925, 'data-value': derived.doubled }, children);
}
export default Component43925;
