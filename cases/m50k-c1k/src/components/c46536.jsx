import React from 'react';
const LABEL_46536 = 'component_46536';
export function Component46536({ value = 46536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46536, 'data-value': derived.doubled }, children);
}
export default Component46536;
