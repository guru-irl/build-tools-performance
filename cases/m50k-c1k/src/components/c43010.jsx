import React from 'react';
const LABEL_43010 = 'component_43010';
export function Component43010({ value = 43010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43010, 'data-value': derived.doubled }, children);
}
export default Component43010;
