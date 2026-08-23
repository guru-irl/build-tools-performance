import React from 'react';
const LABEL_43501 = 'component_43501';
export function Component43501({ value = 43501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43501, 'data-value': derived.doubled }, children);
}
export default Component43501;
