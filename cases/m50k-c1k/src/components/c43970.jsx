import React from 'react';
const LABEL_43970 = 'component_43970';
export function Component43970({ value = 43970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43970, 'data-value': derived.doubled }, children);
}
export default Component43970;
