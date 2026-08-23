import React from 'react';
const LABEL_43067 = 'component_43067';
export function Component43067({ value = 43067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43067, 'data-value': derived.doubled }, children);
}
export default Component43067;
