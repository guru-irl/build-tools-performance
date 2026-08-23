import React from 'react';
const LABEL_35005 = 'component_35005';
export function Component35005({ value = 35005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35005, 'data-value': derived.doubled }, children);
}
export default Component35005;
